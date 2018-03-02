import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

import { actionTypes, Fetch, Add } from './actions';
import { State, IdMap } from './reducer';
import { MLService } from '../../services/ml.service';

@Injectable()
export class Effects {
  @Effect()
  public fetch$: Observable<Action> = this.actions$
    .ofType<Fetch>(actionTypes.FETCH).pipe(
      switchMap((action: Fetch) => this.MLService.getMLIds()),
      map((idMap: IdMap) => new Add(idMap))
    );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private MLService: MLService) { }
}
