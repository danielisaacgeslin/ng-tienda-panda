import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../layouts/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: '../layouts/products/products.module#ProductsModule'
  },
  {
    path: 'promotions',
    loadChildren: '../layouts/promotions/promotions.module#PromotionsModule'
  },
  {
    path: 'secondHand',
    loadChildren: '../layouts/second-hand/second-hand.module#SecondHandModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
