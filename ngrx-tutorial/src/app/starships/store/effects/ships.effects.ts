import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

//import { concatMap } from 'rxjs/operators';
//import { EMPTY } from 'rxjs';
import { ShipsActionTypes, ShipsActions } from '../actions/ships.actions';
import { HttpClient } from "@angular/common/http";
import { StarShip } from "src/app/models/star-ship.model";
import * as shipActions from "src/app/starships/store/actions/ships.actions";
import { switchMap, map } from "rxjs/operators";


@Injectable()
export class ShipsEffects {
  @Effect()
  loadShips$ = this.actions$.pipe(
    ofType(ShipsActionTypes.LoadShips),
    switchMap(() => {
      return this.http.get<any>(`https://swapi.co/api/starships`).pipe(
        map(response => {
          return new shipActions.SetShips(response.results);
        })
      );
    })
  );
  // When you paste this, this will give an error because you have not created
  // SetShips. We will do that now


  /*
  @Effect()
  loadShipss$ = this.actions$.pipe(
    ofType(ShipsActionTypes.LoadShipss),
    //An EMPTY observable only emits completion. Replace with your own observable API request 
    concatMap(() => EMPTY)
  );
    */

  //constructor(private actions$: Actions<ShipsActions>) {}

  constructor(private actions$: Actions, private http: HttpClient) {}

}