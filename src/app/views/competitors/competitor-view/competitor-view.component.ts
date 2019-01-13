import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Competitor } from '../../../core/models/competitor';
import { Store } from '@ngrx/store';
import * as fromCompetitorsStore from '../store';
import * as competitorsActions from '../store/actions/competitors.actions';

@Component({
  selector: 'app-competitor-view',
  templateUrl: './competitor-view.component.html',
  styleUrls: ['./competitor-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ComponentViewComponent implements OnInit {
  competitors$: Observable<Competitor[]>;

  constructor(public store: Store<fromCompetitorsStore.State>) {}

  ngOnInit() {
    // subscribe to the store and select competitors array
    this.competitors$ = this.store.select(fromCompetitorsStore.getEntitiesArray);
  }

  addCompetitor(/*competitor: Competitor*/) {
   // this.store.dispatch(new competitorsActions.AddCompetitor(competitor));
  }

  updateCompetitor(competitor: Competitor) {
    this.store.dispatch(new competitorsActions.UpdateCompetitor(competitor));
  }

  deleteCompetitor(competitor: Competitor) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new competitorsActions.DeleteCompetitor(competitor));
    }
  }
}
