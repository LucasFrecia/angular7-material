import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as uiActions from '../actions/ui.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class UiEffects {

  @Effect({ dispatch: false })
  setIsLoading$ = this.actions$.pipe(
    ofType(uiActions.SET_IS_LOADING),
    map((action: uiActions.SetLoading) => {
      return action.payload;
    })
  );

  constructor(private actions$: Actions) {}
}
