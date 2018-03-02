import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  stateName as idMapStateName,
  reducer as idMapReducer,
  Effects as idMapEffects
} from '../../state-mgmt/id-map';
import {
  stateName as productStateName,
  reducer as productReducer,
  Effects as productEffects
} from '../../state-mgmt/product';

import { SharedModule } from '../../shared/shared.module';
import { SportRoutingModule } from './sport-routing.module';

import { SportListComponent } from './sport-list/sport-list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    StoreModule.forFeature(idMapStateName, idMapReducer.reducer),
    StoreModule.forFeature(productStateName, productReducer.reducer),
    EffectsModule.forFeature([idMapEffects, productEffects]),
    SharedModule,
    SportRoutingModule
  ],
  declarations: [SportListComponent, DetailComponent]
})
export class SportModule { }
