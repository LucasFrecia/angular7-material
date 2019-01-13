import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import {
  SNACKBAR_CLOSE,
  SNACKBAR_OPEN,
  SnackbarClose,
  SnackbarOpen
} from '../actions/snackbar.actions';

@Injectable()
export class SnackbarEffects {
  @Effect({
    dispatch: false
  })
  closeSnackbar: Observable<any> = this.actions.pipe(
    ofType(SNACKBAR_CLOSE),
    tap(() => this.matSnackBar.dismiss())
  );

  @Effect()
  showSnackbar: Observable<any> = this.actions.pipe(
    ofType<SnackbarOpen>(SNACKBAR_OPEN),
    map((action: SnackbarOpen) => action.payload),
    tap(payload =>
      this.matSnackBar.open(payload.message, payload.action, payload.config)
    ),
    delay(3000),
    map(() => new SnackbarClose())
  );

  constructor(private actions: Actions, private matSnackBar: MatSnackBar) {}
}
