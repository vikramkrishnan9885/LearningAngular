import { Action } from '@ngrx/store';
import { StarShip } from './../../../models/star-ship.model';


export enum ShipsActionTypes {
  LoadShipss = '[Ships] Load Shipss',
  SetShips = '[Ships] Set Ships'
  
}

export class LoadShipss implements Action {
  readonly type = ShipsActionTypes.LoadShipss;
}

export class SetShips implements Action {
  readonly type = ShipsActionTypes.SetShips;

  constructor(public payload: StarShip[]) {}
}

export type ShipsActions = LoadShipss | SetShips;
