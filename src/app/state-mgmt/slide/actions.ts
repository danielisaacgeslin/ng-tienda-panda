import { Action } from '@ngrx/store';

import { stateName } from './state-name';
import { Slide } from '../../models';

export const actionTypes = {
  FETCH: `[${stateName}] Fetch`,
  ADD: `[${stateName}] Add`
};

export class Fetch implements Action {
  public type: string = actionTypes.FETCH;
  constructor() { }
}

export class Add implements Action {
  public type: string = actionTypes.ADD;
  constructor(public payload: Slide[]) { }
}
