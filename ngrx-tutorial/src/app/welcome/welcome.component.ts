import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name$: Observable<string>;


  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.name$ = this.store.select(fromStore.getFriendlyName);
  }

}

/*

Notes:
=======================
First, define a ‘name$’ Observable<string> property
The html will reference this
Now, populate the name$ with this.store.select(fromStore.getFriendlyName)
This is using our selector created in the main reducer
Whenever this value is updated, it will automatically update the component

*/