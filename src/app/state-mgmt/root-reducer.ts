import { ActionReducerMap } from '@ngrx/store';

import { reducer as idMapReducer } from './id-map';

export interface State extends idMapReducer.State { }

export const initialState = { ...idMapReducer.initialState };

export const reducers: ActionReducerMap<State> = {
  idMap: idMapReducer.reducer
};
