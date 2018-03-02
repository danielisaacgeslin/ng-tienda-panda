import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  stateName as productStateName,
  reducer as productReducer,
  Effects as productEffects
} from '../../state-mgmt/product';

import { SharedModule } from '../../shared/shared.module';
import { GameRoutingModule } from './game-routing.module';

import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(productStateName, productReducer.reducer),
    EffectsModule.forFeature([productEffects]),
    SharedModule,
    GameRoutingModule
  ],
  declarations: [GameListComponent]
})
export class GameModule { }
