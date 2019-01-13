import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Competitor } from '../../../core/models/competitor';
import { Store } from '@ngrx/store';
import * as fromCompetitorsStore from '../store';
import * as competitorsActions from '../store/actions/competitors.actions';
import { ComponentViewComponent } from '../competitor-view/competitor-view.component';

@Component({
  selector: 'app-competitor-list',
  templateUrl: './competitor-list.component.html',
  styleUrls: ['./competitor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CompetitorListComponent extends ComponentViewComponent implements OnInit {
  competitors$: Observable<Competitor[]>;

  constructor(public store: Store<fromCompetitorsStore.State>) {
    super(store);
  }

}
