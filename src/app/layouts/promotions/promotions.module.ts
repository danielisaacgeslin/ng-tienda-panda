import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsRoutingModule } from './promotions-routing.module';

import { PromotionListComponent } from './promotion-list/promotion-list.component';

@NgModule({
  imports: [
    CommonModule,
    PromotionsRoutingModule
  ],
  declarations: [PromotionListComponent]
})
export class PromotionsModule { }
