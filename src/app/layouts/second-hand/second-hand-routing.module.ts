import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SecondHandListComponent } from './second-hand-list/second-hand-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SecondHandListComponent },
      { path: 'lista', component: SecondHandListComponent }
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
export class SecondHandRoutingModule { }
