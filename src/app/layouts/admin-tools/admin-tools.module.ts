import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminToolsRoutingModule } from './admin-tools-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminToolsListComponent } from './admin-tools-list/admin-tools-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AdminToolsRoutingModule
  ],
  declarations: [AdminToolsListComponent]
})
export class AdminToolsModule { }
