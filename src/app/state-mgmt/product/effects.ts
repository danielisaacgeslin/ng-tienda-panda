import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

import { Article } from '../../models';
import { actionTypes, FetchCategory, AddByCategory, FetchById } from './actions';
import { State, Product } from './reducer';
import { MLService } from '../../services/ml.service';

@Injectable()
export class Effects {
  @Effect()
  public fetchByCategory$: Observable<Action> = this.actions$
    .ofType<FetchCategory>(actionTypes.FETCH_CATEGORY).pipe(
      switchMap((action: FetchCategory) => this.MLService.getItems(action.payload.ids).pipe(
        map(data => ({ list: data, name: action.payload.name }))
      )),
      map(data => new AddByCategory({ name: data.name, list: data.list }))
    );

  @Effect()
  public fetchById$: Observable<Action> = this.actions$
    .ofType<FetchById>(actionTypes.FETCH_BY_ID).pipe(
      switchMap((action: FetchById) => this.MLService.getItem(action.payload.id).pipe(
        map(data => ({ list: [data], name: action.payload.name }))
      )),
      map(data => new AddByCategory({ name: data.name, list: data.list }))
    );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private MLService: MLService) { }
}
