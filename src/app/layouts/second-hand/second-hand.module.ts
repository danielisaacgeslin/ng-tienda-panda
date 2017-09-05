import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { SecondHandRoutingModule } from './second-hand-routing.module';

import { SecondHandListComponent } from './second-hand-list/second-hand-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SecondHandRoutingModule
  ],
  declarations: [SecondHandListComponent]
})
export class SecondHandModule { }
