import { createFeatureSelector, createSelector, State } from '@ngrx/store';

import { stateName } from './state-name';
import { actionTypes } from './actions';
import { State as RootState } from '../root-reducer';

export interface IdMap {
  [categoryKey: string]: string[];
}

export const initialState: IdMap = {};

export function reducer(state: IdMap = initialState, action: any): IdMap {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}


export interface State extends RootState {
  idMap: IdMap;
}

export const getIdMapState = createFeatureSelector<IdMap>(stateName);
export const getByCategory = (categoryName: string) => createSelector(
  getIdMapState,
  state => state[categoryName] || []
);

