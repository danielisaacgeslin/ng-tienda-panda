import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

import { actionTypes, Fetch, Add } from './actions';
import { Slide } from '../../models';
import { State, SlideState } from './reducer';
import { BannerService } from '../../services';

@Injectable()
export class Effects {
  @Effect()
  public fetch$: Observable<Action> = this.actions$
    .ofType<Fetch>(actionTypes.FETCH).pipe(
      switchMap((action: Fetch) => this.bannerService.getBanners()),
      map((banners: string[]) => new Add(banners.map(src => new Slide({ title: src, src }))))
    );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private bannerService: BannerService) { }
}
