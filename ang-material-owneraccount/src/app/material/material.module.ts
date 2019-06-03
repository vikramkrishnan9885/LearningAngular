import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

////
import { MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
