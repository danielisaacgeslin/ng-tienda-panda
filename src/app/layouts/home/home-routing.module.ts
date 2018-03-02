import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeListComponent } from './home-list/home-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeListComponent },
      { path: 'lista', component: HomeListComponent }
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
export class HomeRoutingModule { }
