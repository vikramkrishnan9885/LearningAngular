import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

////
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material'; // FOR THE ACCORDION - OWNER-DETAIL/ACCOUNT
import{ MatDatepickerModule, MatNativeDateModule } from '@angular/material'
import { MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatDialogModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }

// PATTERN IS:
// 1. IMPORT MODULE HERE - ADD IT TO IMPORTS AND EXPORTS AS WELL
// 2. CREATE A COMPONENT IN EITHER MAIN FOLDER OR NAVIGATION/ FOLDER
// 3. REPLACE HTML OF THE COMPONENT WITH XHTML THAT USES THE MATERIAL COMPONENT: SEE WEBSITE - https://material.angular.io/components/categories FOR MORE DETAILS
// 4. ADD CSS IF YOU WISH TO MAKE IT LOOK PASSABLE
// 5. EDIT THE COMPONENT.TS TO ADD BEHAVIOR LIKE OPEN CLOSE ETC
// 6. ADD TO APP.COMPONENT.HTML 