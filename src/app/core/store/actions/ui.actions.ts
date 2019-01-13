import {Action} from '@ngrx/store';

export const SET_IS_LOADING = '[UI] Set Is Loading';


export class SetLoading implements Action {
  readonly type = SET_IS_LOADING;
  constructor(public payload?: boolean) {}
}

export type All = SetLoading;
