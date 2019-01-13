import * as snackbarAction from '../actions/snackbar.actions';
import { SnackbarAction } from '../actions/snackbar.actions';

export interface State {
  show: boolean;
}

const initialState: State = {
  show: false
};

export function reducer(state: State = initialState, action: SnackbarAction) {
  switch (action.type) {
    case snackbarAction.SNACKBAR_CLOSE:
      return { ...state, show: false };
    case snackbarAction.SNACKBAR_OPEN:
      return { ...state, show: true };
    default:
      return state;
  }
}
