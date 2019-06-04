import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

////

import { Routes, RouterModule } from '@angular/router';
import { OwnerListComponent } from '../owner-list/owner-list.component';
import { OwnerDetailsComponent } from '../owner-details/owner-details.component';
 
const routes: Routes = [
  { path: 'owners', component: OwnerListComponent },
  { path: 'details/:id', component: OwnerDetailsComponent}
];

//SUB-PATHS ARE DEFINED AS ABOVE

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OwnerRoutingModule { }
