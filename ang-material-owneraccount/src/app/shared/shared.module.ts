import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

///
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';

@NgModule({
  declarations: [SuccessDialogComponent, ErrorDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports:[
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }

/**
 * Important: Because we now have the FlexLayoutModule and MaterialModule 
 * inside of the shared module file, we don’t need them anymore in the app 
 * and owner module files. Therefore, we can remove the FlexLayoutModule and 
 * MaterialModule imports from the app and owner module files and just 
 * import the SharedModule in both mentioned module files (app and owner).
 */
