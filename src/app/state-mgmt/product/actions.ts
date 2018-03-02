import { Action } from '@ngrx/store';

import { Article } from '../../models';
import { stateName } from './state-name';

export const actionTypes = {
  FETCH_CATEGORY: `[${stateName}] Fetch category`,
  ADD_CATEGORY: `[${stateName}] Add category`
};

export class FetchCategory implements Action {
  public type: string = actionTypes.FETCH_CATEGORY;
  constructor(public payload: { name: string; ids: string[] }) { }
}

export class AddCategory implements Action {
  public type: string = actionTypes.ADD_CATEGORY;
  constructor(public payload: { name: string; list: Article[] }) { }
}
