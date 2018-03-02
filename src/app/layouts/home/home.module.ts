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
import { HomeRoutingModule} from './home-routing.module';

import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(productStateName, productReducer.reducer),
    EffectsModule.forFeature([productEffects]),
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeListComponent]
})
export class HomeModule { }
