import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { Observable } from 'rxjs';

///

import { StarShip } from "../../models/star-ship.model";
import * as fromRoot from "src/app/store/reducers";
import { LoadShipss } from "../store/actions/ships.actions";

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  starships$: Observable<StarShip[]>;
  user$: Observable<string>;
  
  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.starships$ = this.store.select(fromStore.getAllShips);
    this.user$ = this.store.select(fromRoot.getFriendlyName);
 
    this.store.dispatch(new LoadShipss());
  }

}

/*

Dispatch the LoadShips action to load the ships using the Star Wars API 
  in the effect (see code below)
  
Use the fromStore.getAllShips to get the ships from our feature module…
  here’s how this is setup in the feature module index.ts reducer:

*/