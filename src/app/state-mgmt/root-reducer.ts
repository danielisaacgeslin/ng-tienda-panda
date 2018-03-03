import { ActionReducerMap } from '@ngrx/store';
import { RouterStateSnapshot, Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

import { reducer as idMapReducer } from './id-map';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State extends idMapReducer.State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const initialState = {
  // router: { url: '', params: {}, queryParams: {} },
  ...idMapReducer.initialState
};

export const reducers: ActionReducerMap<State> = {
  idMap: idMapReducer.reducer,
  router: fromRouter.routerReducer
};
