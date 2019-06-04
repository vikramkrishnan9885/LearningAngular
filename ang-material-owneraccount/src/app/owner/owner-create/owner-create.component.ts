import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { OwnerForCreation } from '../../_interface/ownerForCreation.model';
import { MatDialog, MatDialogConfig } from '@angular/material'; 
import { SuccessDialogComponent } from './../../shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {
  public ownerForm: FormGroup;
  private dialogConfig: MatDialogConfig;
  private dialog: MatDialog;

  constructor(private location: Location, private repository: RepositoryService) { }
 
  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
  }
 
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
  }
 
  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }
 
  private executeOwnerCreation = (ownerFormValue) => {
    let owner: OwnerForCreation = {
      name: ownerFormValue.name,
      dateOfBirth: ownerFormValue.dateOfBirth,
      address: ownerFormValue.address
    }
 
    let apiUrl = 'api/owner';
    this.repository.create(apiUrl, owner)
      .subscribe(res => {
        //this is temporary, until we create our dialogs
        // this.location.back();
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed()
          .subscribe(result => {
            this.location.back();
      });
      },
      (error => {
        //temporary as well
        this.location.back();
      })
    )
  }
 
}




/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
