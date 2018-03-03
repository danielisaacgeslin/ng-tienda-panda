import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { CustomRouterStateSerializer } from './utils';
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
    loadChildren: './layouts/game/game.module#GameModule'
  },
  {
    path: 'hogar',
    loadChildren: './layouts/home/home.module#HomeModule'
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
    RouterModule.forRoot(routes, { useHash: false }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  exports: [RouterModule],
  providers: [{
    provide: RouterStateSerializer,
    useClass: CustomRouterStateSerializer
  }],
  declarations: []
})
export class RoutingModule { }
