import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './layouts/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sports',
    pathMatch: 'full'
  },
  {
    path: 'sports',
    loadChildren: './layouts/sport/sport.module#SportModule'
  },
  {
    path: 'juegos',
    loadChildren: './layouts/promotions/promotions.module#PromotionsModule'
  },
  {
    path: 'hogar',
    loadChildren: './layouts/second-hand/second-hand.module#SecondHandModule'
  },
  {
    path: 'adminTools',
    loadChildren: './layouts/admin-tools/admin-tools.module#AdminToolsModule'
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
