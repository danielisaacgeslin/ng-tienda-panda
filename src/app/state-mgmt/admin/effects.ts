import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, switchMap, map, catchError, filter } from 'rxjs/operators';

import { constants } from '../../constants';
import { Loading } from '../../models';
import { AdminService, ToastrService } from '../../services';
import { actionTypes, AddToken, ClearToken, SaveMLIds, SetLoading } from './actions';
import { State } from './reducer';

@Injectable()
export class Effects {
  @Effect({ dispatch: false })
  public addToken$: Observable<Action> = this.actions$
    .ofType<AddToken>(actionTypes.ADD_TOKEN).pipe(
      tap((action: AddToken) => localStorage.setItem(constants.STORAGE.TOKEN, action.payload))
    );

  @Effect({ dispatch: false })
  public clearToken$: Observable<Action> = this.actions$
    .ofType<ClearToken>(actionTypes.CLEAR_TOKEN).pipe(
      tap((action: ClearToken) => localStorage.removeItem(constants.STORAGE.TOKEN))
    );

  @Effect()
  public saveMLIds$: Observable<Action> = this.actions$
    .ofType<SaveMLIds>(actionTypes.SAVE_ML_IDS).pipe(
      tap(() => this.store.dispatch(new SetLoading(new Loading({ active: true })))),
      switchMap((action: SaveMLIds) => this.adminService.saveMLIds(action.payload).pipe(
        map(() => new SetLoading({ active: false, title: 'Exito', message: 'lista salvada', status: 'success' })),
        catchError(e => of(new SetLoading({ active: false, title: 'Error', message: e.error, status: 'danger' })))
      )),
  );

  @Effect({ dispatch: false })
  public setLoading$: Observable<Action> = this.actions$
    .ofType<SetLoading>(actionTypes.SET_LOADING).pipe(
      filter((action: SetLoading) => !!(action.payload.active || action.payload.status)),
      tap((action: SetLoading) => this.toastrService.toast(action.payload))
    );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private adminService: AdminService,
    private toastrService: ToastrService) { }
}
