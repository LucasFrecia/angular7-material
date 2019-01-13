import * as uiActions from '../actions/ui.actions';

export interface State {
  isLoading: boolean;
}

export const INIT_STATE: State = {
  isLoading: false
};

export function reducer(
  state = INIT_STATE,
  { type, payload }: uiActions.All
): State {
  switch (type) {
    case uiActions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: payload
      };
    }

    default:
      return state;
  }
}

export const getLoadingStatus = (state: State): boolean => state.isLoading;
