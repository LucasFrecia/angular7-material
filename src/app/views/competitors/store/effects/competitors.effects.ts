import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {Observable, of } from 'rxjs';
import { CompetitorsService } from '../../services/competitors.service';
import * as competitorsActions from '../actions/competitors.actions';
import { map, tap, startWith } from 'rxjs/operators';

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
    map((action: competitorsActions.AddCompetitor) => action.payload),
    tap(competitor => this.competitorsService.addCompetitor(competitor))
  );

  @Effect()
  updateCompetitor$ = this.actions$.pipe(
    ofType(competitorsActions.UPDATE_COMPETITOR),
    map((action: competitorsActions.UpdateCompetitor) => action.payload),
    tap(competitor => this.competitorsService.updateCompetitor(competitor))
  );

  @Effect()
  deleteCompetitor$ = this.actions$.pipe(
    ofType(competitorsActions.DELETE_COMPETITOR),
    map((action: competitorsActions.UpdateCompetitor) => action.payload),
    tap(competitor => this.competitorsService.deleteCompetitor(competitor))
  );

  constructor(
    private actions$: Actions,
    private competitorsService: CompetitorsService
  ) {}
}
