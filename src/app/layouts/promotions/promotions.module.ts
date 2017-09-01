import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PromotionsRoutingModule } from './promotions-routing.module';

import { PromotionListComponent } from './promotion-list/promotion-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PromotionsRoutingModule
  ],
  declarations: [PromotionListComponent]
})
export class PromotionsModule { }
