import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Owner } from '../../_interface/owner.model';
//
import { AfterViewInit, ViewChild } from '@angular/core';
 
@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
 
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'
];
  // If we change the order of elements inside the displayedColumns array, 
  // it will change the order of the columns inside our table.

  public dataSource = new MatTableDataSource<Owner>();
 
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private repoService: RepositoryService) { }
 
  ngOnInit() {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
 
  public getAllOwners = () => {
    this.repoService.getData('api/owner')
    .subscribe(res => {
      this.dataSource.data = res as Owner[];
    })
  }
 
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
  public redirectToDetails = (id: string) => {
    
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    
  }
 
}