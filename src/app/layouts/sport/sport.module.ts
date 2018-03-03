import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  stateName as productStateName,
  reducer as productReducer,
  Effects as productEffects
} from '../../state-mgmt/product';
import {
  stateName as slideStateName,
  reducer as slideReducer,
  Effects as slideEffects
} from '../../state-mgmt/slide';

import { BannerService } from '../../services';
import { SharedModule } from '../../shared/shared.module';
import { SportRoutingModule } from './sport-routing.module';

import { SportListComponent } from './sport-list/sport-list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    StoreModule.forFeature(productStateName, productReducer.reducer),
    StoreModule.forFeature(slideStateName, slideReducer.reducer),
    EffectsModule.forFeature([productEffects, slideEffects]),
    SharedModule,
    SportRoutingModule
  ],
  providers: [BannerService],
  declarations: [SportListComponent, DetailComponent]
})
export class SportModule { }
