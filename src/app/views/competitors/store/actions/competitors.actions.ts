
import {Action} from '@ngrx/store';
import {Competitor} from '../../../../core/models/competitor';

export const LIST_COMPETITORS    = '[Competitors] List';
export const COMPETITORS_LISTED  = '[Competitors] Listed';

export const ADD_COMPETITOR      = '[Competitors] Add';
export const UPDATE_COMPETITOR   = '[Competitors] Update';
export const DELETE_COMPETITOR   = '[Competitors] Delete';

export class ListCompetitors implements Action {
  readonly type = LIST_COMPETITORS;
}

export class CompetitorsListed implements Action {
  readonly type = COMPETITORS_LISTED;
  constructor(public payload?: {[id: string]: Competitor}) {}
}

export class AddCompetitor implements Action {
  readonly type = ADD_COMPETITOR;
  constructor(public payload?: Competitor) {}
}

export class UpdateCompetitor implements Action {
  readonly type = UPDATE_COMPETITOR;
  constructor(public payload?: Competitor) {}
}

export class DeleteCompetitor implements Action {
  readonly type = DELETE_COMPETITOR;
  constructor(public payload?: Competitor) {}
}

export type All =
    ListCompetitors
    | CompetitorsListed
    | AddCompetitor
    | UpdateCompetitor
    | DeleteCompetitor;
