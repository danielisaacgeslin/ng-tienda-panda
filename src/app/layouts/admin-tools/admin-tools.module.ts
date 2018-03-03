import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  stateName as adminStateName,
  reducer as adminReducer,
  Effects as adminEffects
} from '../../state-mgmt/admin';
import {
  stateName as productStateName,
  reducer as productReducer,
  Effects as productEffects
} from '../../state-mgmt/product';

import { AdminToolsRoutingModule } from './admin-tools-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminService } from '../../services';
import { AdminToolsListComponent } from './admin-tools-list/admin-tools-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(adminStateName, adminReducer.reducer),
    StoreModule.forFeature(productStateName, productReducer.reducer),
    EffectsModule.forFeature([adminEffects, productEffects]),
    ReactiveFormsModule,
    SharedModule,
    AdminToolsRoutingModule
  ],
  providers: [AdminService],
  declarations: [AdminToolsListComponent]
})
export class AdminToolsModule { }
