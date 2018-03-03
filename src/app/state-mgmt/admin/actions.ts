import { Action } from '@ngrx/store';

import { stateName } from './state-name';
import { Loading } from '../../models';

export const actionTypes = {
  ADD_TOKEN: `[${stateName}] Add token`,
  SAVE_ML_IDS: `[${stateName}] Save ML ids`,
  CLEAR_TOKEN: `[${stateName}] Clear token`,
  SET_LOADING: `[${stateName}] Set loading`
};

export class AddToken implements Action {
  public type: string = actionTypes.ADD_TOKEN;
  constructor(public payload: string) { }
}

export class ClearToken implements Action {
  public type: string = actionTypes.CLEAR_TOKEN;
  constructor() { }
}

export class SetLoading implements Action {
  public type: string = actionTypes.SET_LOADING;
  constructor(public payload: Loading) { }
}

export class SaveMLIds implements Action {
  public type: string = actionTypes.SAVE_ML_IDS;
  constructor(public payload: { token: string; MLIds: { [key: string]: string[] } }) { }
}
