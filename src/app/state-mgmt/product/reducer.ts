import { createFeatureSelector, createSelector, State } from '@ngrx/store';

import { Article } from '../../models';
import { stateName } from './state-name';
import { actionTypes } from './actions';

export interface Product {
  [categoryKey: string]: Article[];
}

export const initialState: Product = {};

export function reducer(state: Product = initialState, action: any): Product {
  switch (action.type) {
    case actionTypes.ADD_BY_CATEGORY:
      const oldList: Article[] = state[action.payload.name] || [];
      const newList: Article[] = action.payload.list
        .filter(nItem => !oldList.find(oItem => oItem.id === nItem.id));
      return { ...state, ...{ [action.payload.name]: oldList.concat(newList) } };
    default:
      return state;
  }
}


export interface State {
  product: Product;
}

export const getProductState = createFeatureSelector<Product>(stateName);
export const getByCategory = (categoryName: string) => createSelector(
  getProductState,
  state => state[categoryName] || []
);
export const getById = (id: string) => createSelector(
  getProductState,
  state => Object
    .keys(state)
    .reduce((total, curr) => total.concat(state[curr]), [])
    .find((item: Article) => item.id === id)
);
