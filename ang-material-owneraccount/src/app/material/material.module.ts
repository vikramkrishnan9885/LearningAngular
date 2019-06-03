import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

////
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
