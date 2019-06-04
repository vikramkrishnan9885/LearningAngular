import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

// 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

import * as authActions from '../actions/auth.actions';


@Injectable()
export class AuthEffects {



  //constructor(private actions$: Actions) {}

  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap(() => {
      return this.http.get<any>(`https://swapi.co/api/people/1/`) 
      //this.http.get<string>('login')
        //.pipe(map((userName) => {
        //  return new authActions.SetAuths(userName);
        //})
        .pipe(
          map((person) => {
            const name: string = person.name;
            return new authActions.SetAuths({
              userName: name.replace(" ", ""),
              friendlyName: name
            });
          })
      )
    })
  );

}
