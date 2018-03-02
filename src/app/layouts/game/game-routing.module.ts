import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: GameListComponent },
      { path: 'lista', component: GameListComponent }
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
export class GameRoutingModule { }
