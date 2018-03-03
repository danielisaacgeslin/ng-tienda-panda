import { createFeatureSelector, createSelector, State } from '@ngrx/store';

import { constants } from '../../constants';
import { Loading } from '../../models';
import { stateName } from './state-name';
import { actionTypes } from './actions';

export interface Admin {
  token: string;
  loading: Loading;
}

export const initialState: Admin = {
  token: localStorage.getItem(`${constants.STORAGE.TOKEN}`),
  loading: new Loading()
};

export function reducer(state: Admin = initialState, action: any): Admin {
  switch (action.type) {
    case actionTypes.ADD_TOKEN:
      return { ...state, ...{ token: action.payload } };
    case actionTypes.SET_LOADING:
      return { ...state, ...{ loading: new Loading(action.payload) } };
    default:
      return state;
  }
}

export interface State {
  admin: Admin;
}

export const getAdminState = createFeatureSelector<Admin>(stateName);
export const getToken = createSelector(getAdminState, state => state.token);
export const getLoading = createSelector(getAdminState, state => state.loading);
