

import {Competitor} from '../../../../core/models/competitor';
import * as competitorsActions from '../actions/competitors.actions';
import {createSelector} from '@ngrx/store';

export interface State {
  ids: string[];
  entities: { [Id: string]: Competitor };
  selectedCompetitorId: string;
}

export const INIT_STATE: State = {
  ids: [],
  entities: {},
  selectedCompetitorId: null
};


export function reducer(state = INIT_STATE, action: competitorsActions.All): State {

  switch (action.type) {

    case competitorsActions.COMPETITORS_LISTED : {

      const ids = Object.keys(action.payload);
      return {
        ...state,
        ids,
        entities: action.payload
      };

    }

    case competitorsActions.ADD_COMPETITOR : {

      if (state.ids.includes(action.payload.Id)) { // if competitor already exists
        return state;
      }

      return {
        ...state,
        ids: [...state.ids, action.payload.Id],
        entities: Object.assign({}, state.entities, {[action.payload.Id]: action.payload})
      };

    }


    case competitorsActions.UPDATE_COMPETITOR : {

      const newState = Object.assign({}, state);
      const competitor = newState.entities[action.payload.Id];

      if (!competitor) { // competitor doesn't exist in the store
        newState.ids = [...newState.ids, action.payload.Id];
        newState.entities[action.payload.Id] = action.payload; // create it
      } else {
        newState.entities[action.payload.Id] = Object.assign({}, {...competitor}, {...action.payload});
      }
      return newState;
    }


    case competitorsActions.DELETE_COMPETITOR : {

      if (!state.entities[action.payload.Id]) {
        return state;
      }

      const newState = Object.assign({}, state);

      const idIndex = newState.ids.indexOf(action.payload.Id);
      newState.ids.splice(idIndex, 1);
      newState.entities[action.payload.Id] = undefined;

      return newState;
    }

    default: return state;
  }
}

export const getEntites = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getSelectedId = (state: State) => state.selectedCompetitorId;

export const getSelected = createSelector(
    getEntites,
    getSelectedId,
    (entities, Id) => entities[Id]
);

export const getEntitesArray = (state: State) => state.ids.map(Id => state.entities[Id]);
