import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { CompetitorsService } from '../../services/competitors.service';
import * as competitorsActions from '../actions/competitors.actions';
import { map, tap, startWith, switchMap } from 'rxjs/operators';
import { SnackbarOpen } from '../../../../core/store/actions/snackbar.actions';

@Injectable()
export class CompetitorsEffects {

  @Effect({ dispatch: false }) // effect will not dispatch any actions
  listCompetitors$ = this.actions$.pipe(
    ofType(competitorsActions.LIST_COMPETITORS),
    startWith(new competitorsActions.CompetitorsListed()), // List competitors automatically when applications starts
    tap(() => this.competitorsService.listCompetitors())
  );

  @Effect()
  addCompetitor$ = this.actions$.pipe(
    ofType(competitorsActions.ADD_COMPETITOR),
    map((action: competitorsActions.AddCompetitor) => {
      return action.payload;
    }),
    switchMap(competitor =>
      of(new SnackbarOpen({ message: 'Competitor created!!!' }))
    )
  );

  @Effect()
  updateCompetitor$ = this.actions$.pipe(
    ofType(competitorsActions.UPDATE_COMPETITOR),
    map((action: competitorsActions.UpdateCompetitor) => {
      return action.payload;
    }),
    switchMap(competitor =>
      of(new SnackbarOpen({ message: 'Competitor Updated!!!' }))
    )
  );

  @Effect()
  deleteCompetitor$ = this.actions$.pipe(
    ofType(competitorsActions.DELETE_COMPETITOR),
    map((action: competitorsActions.DeleteCompetitor) => {
      return action.payload;
    }),
    switchMap(competitor =>
      of(new SnackbarOpen({ message: 'Competitor Deleted!!!' }))
    )
  );

  constructor(
    private actions$: Actions,
    private competitorsService: CompetitorsService
  ) {}
}
