import { createFeatureSelector, createSelector, State } from '@ngrx/store';

import { Slide } from '../../models';
import { stateName } from './state-name';
import { actionTypes } from './actions';

export interface SlideState {
  list: Slide[];
}

export const initialState: SlideState = {
  list: []
};

export function reducer(state: SlideState = initialState, action: any): SlideState {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, ...{ list: action.payload } };
    default:
      return state;
  }
}


export interface State {
  slide: SlideState;
}

export const getSlidestate = createFeatureSelector<SlideState>(stateName);
export const getList = createSelector(getSlidestate, state => state.list);

