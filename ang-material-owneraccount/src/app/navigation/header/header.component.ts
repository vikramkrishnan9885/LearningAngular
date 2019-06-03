import { Component, OnInit } from '@angular/core';

///
//If we take a look at the icon button code, we can see the onToggleSidenav() event. 
// We need to implement it inside the header.component.ts file
import {Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
