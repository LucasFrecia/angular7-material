import { MatSnackBarConfig } from '@angular/material';
import { Action } from '@ngrx/store';

export const SNACKBAR_OPEN = '[Snack] Open'; // createActionType('SNACKBAR_OPEN');
export const SNACKBAR_CLOSE = '[Snack] Close'; // createActionType('SNACKBAR_CLOSE');

export class SnackbarOpen implements Action {
  readonly type = SNACKBAR_OPEN;

  constructor(
    public payload: {
      message: string;
      action?: string;
      config?: MatSnackBarConfig;
    }
  ) {}
}

export class SnackbarClose implements Action {
  readonly type = SNACKBAR_CLOSE;
}

export type SnackbarAction = SnackbarOpen | SnackbarClose;
