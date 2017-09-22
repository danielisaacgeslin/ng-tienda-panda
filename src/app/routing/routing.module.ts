import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../layouts/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    loadChildren: '../layouts/products/products.module#ProductsModule'
  },
  {
    path: 'promociones',
    loadChildren: '../layouts/promotions/promotions.module#PromotionsModule'
  },
  {
    path: 'segunda-mano',
    loadChildren: '../layouts/second-hand/second-hand.module#SecondHandModule'
  },
  {
    path: 'adminTools',
    loadChildren: '../layouts/admin-tools/admin-tools.module#AdminToolsModule'
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
