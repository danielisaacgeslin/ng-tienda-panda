import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SportListComponent } from './sport-list/sport-list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SportListComponent },
      { path: 'lista', component: SportListComponent },
      { path: 'detalle/:id', component: DetailComponent }
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
export class SportRoutingModule { }
