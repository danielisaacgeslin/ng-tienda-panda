import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminToolsListComponent } from './admin-tools-list/admin-tools-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AdminToolsListComponent }
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
export class AdminToolsRoutingModule { }
