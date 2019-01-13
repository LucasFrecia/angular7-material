import * as fromCompetitors from './reducers/competitors.reducer';
import * as fromRoot from '../../../core/store';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export interface CompetitorsState {
  competitors: fromCompetitors.State;
}


export interface State extends fromRoot.State {
  'competitors': CompetitorsState;
}

export const reducers = {
  competitors: fromCompetitors.reducer
};


export const getCompetitorsRootState = createFeatureSelector<CompetitorsState>('competitors');
export const getCompetitorsState = createSelector(
    getCompetitorsRootState,
    (competitorsState: CompetitorsState) => competitorsState.competitors
  );

export const getEntites = createSelector(getCompetitorsState, fromCompetitors.getEntites);
export const getIds = createSelector(getCompetitorsState, fromCompetitors.getIds);
export const getSelectedId = createSelector(getCompetitorsState, fromCompetitors.getSelectedId);
export const getSelected = createSelector(getCompetitorsState, fromCompetitors.getSelected);
export const getEntitiesArray = createSelector(getCompetitorsState, fromCompetitors.getEntitesArray);
