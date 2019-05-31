import { Injectable } from '@angular/core';

////
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
// The HeroService must wait for the server to respond, 
// getHeroes() cannot return immediately with hero data, 
// and the browser will not block while the service waits.
// HeroService.getHeroes() must have an asynchronous signature of some kind.
// It can take a callback. It could return a Promise. 
// It could return an Observable.
// Observable is one of the key classes in the RxJS library.
// Angular's HttpClient methods return RxJS Observables


@Injectable({
  providedIn: 'root'
})
// Note the Injectable tag and import { Injectable }


export class HeroService {

  //getHeroes(): Hero[] {
  //  return HEROES;
  //}
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, 
    // the array of mock heroes.
  }

  constructor() { }
}

// Components shouldn't fetch or save data directly 
// and they certainly shouldn't knowingly present fake data. 
// They should focus on presenting data and delegate data access to a service.