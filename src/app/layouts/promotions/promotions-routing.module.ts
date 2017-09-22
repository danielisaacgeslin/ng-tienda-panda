import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PromotionListComponent } from './promotion-list/promotion-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PromotionListComponent },
      { path: 'lista', component: PromotionListComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class PromotionsRoutingModule { }
