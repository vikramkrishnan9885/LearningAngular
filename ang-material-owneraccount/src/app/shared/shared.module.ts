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
    FlexLayoutModule
  ],
  exports:[
    MaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,
    ErrorDialogComponent
  ],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
  /**
   * These modules are imported automatically in the shared.module.ts file, 
   * but we need to export them as well. Moreover, we need to place the dialog 
   * components inside the entryComponents array because we are not going to 
   * use routing nor app selector to call these components. We are going to 
   * use them as a template reference for the dialog’s open() function and 
   * thus the need for the entryComponents array
   */
})
export class SharedModule { }

/**
 * Important: Because we now have the FlexLayoutModule and MaterialModule 
 * inside of the shared module file, we don’t need them anymore in the app 
 * and owner module files. Therefore, we can remove the FlexLayoutModule and 
 * MaterialModule imports from the app and owner module files and just 
 * import the SharedModule in both mentioned module files (app and owner).
 */
