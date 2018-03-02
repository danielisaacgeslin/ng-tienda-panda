import { createFeatureSelector, createSelector, State } from '@ngrx/store';

import { Article } from '../../models';
import { stateName } from './state-name';
import { actionTypes } from './actions';
import { State as RootState } from '../root-reducer';

export interface Product {
  [categoryKey: string]: Article[];
}

export const initialState: Product = {};

export function reducer(state: Product = initialState, action: any): Product {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return { ...state, ...{ [action.payload.name]: action.payload.list } };
    default:
      return state;
  }
}


export interface State extends RootState {
  product: Product;
}

export const getProductState = createFeatureSelector<Product>(stateName);
export const getByCategory = (categoryName: string) => createSelector(
  getProductState,
  state => state[categoryName] || []
);
