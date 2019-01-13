import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Competitor } from '../../../core/models/competitor';
import { Store } from '@ngrx/store';
import * as fromCompetitorsStore from '../store';
import * as competitorsActions from '../store/actions/competitors.actions';
import { DestroySubscribers } from '../../../core/decorators/destroy-subscribers.decorator';

@Component({
  selector: 'app-competitor-view',
  templateUrl: './competitor-view.component.html',
  styleUrls: ['./competitor-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@DestroySubscribers()
export class ComponentViewComponent implements OnInit, OnDestroy {
  competitors$: Observable<Competitor[]>;
  private subscribers: any = {};

  constructor(public store: Store<fromCompetitorsStore.State>) {}

  ngOnInit() {
    // subscribe to the store and select competitors array
    this.competitors$ = this.store.select(fromCompetitorsStore.getEntitiesArray);

    // populate localstorage
    this.subscribers.populateStorage$ = this.store
    .select(fromCompetitorsStore.getEntites)
    .subscribe(competitors => {
      localStorage.setItem('competitors_ids', JSON.stringify(Object.keys(competitors)));
      localStorage.setItem('competitors', JSON.stringify(competitors));
    });
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

  ngOnDestroy() {
    // DO NOT ERASE METHOD, NEEDED FOR UNSUBSCRIPTIONS
  }
}
