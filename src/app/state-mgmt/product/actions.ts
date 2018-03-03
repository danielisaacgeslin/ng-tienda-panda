import { Action } from '@ngrx/store';

import { Article } from '../../models';
import { stateName } from './state-name';

export const actionTypes = {
  FETCH_CATEGORY: `[${stateName}] Fetch category`,
  FETCH_BY_ID: `[${stateName}] Fetch by id`,
  ADD_BY_CATEGORY: `[${stateName}] Add by category`
};

export class FetchCategory implements Action {
  public type: string = actionTypes.FETCH_CATEGORY;
  constructor(public payload: { name: string; ids: string[] }) { }
}

export class FetchById implements Action {
  public type: string = actionTypes.FETCH_BY_ID;
  constructor(public payload: { name: string; id: string }) { }
}

export class AddByCategory implements Action {
  public type: string = actionTypes.ADD_BY_CATEGORY;
  constructor(public payload: { name: string; list: Article[] }) { }
}
