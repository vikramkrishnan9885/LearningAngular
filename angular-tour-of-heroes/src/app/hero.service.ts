import { Injectable } from '@angular/core';

////
import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
// The HeroService must wait for the server to respond, 
// getHeroes() cannot return immediately with hero data, 
// and the browser will not block while the service waits.
// HeroService.getHeroes() must have an asynchronous signature of some kind.
// It can take a callback. It could return a Promise. 
// It could return an Observable.
// Observable is one of the key classes in the RxJS library.
// Angular's HttpClient methods return RxJS Observables

import { MessageService } from './message.service';
// Inject MessageService into the HeroService

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
// Things go wrong, especially when you're getting data from a remote server. 
// The HeroService.getHeroes() method should catch errors and do something 
// appropriate.

@Injectable({
  providedIn: 'root'
})
// Note the Injectable tag and import { Injectable }



export class HeroService {

  //getHeroes(): Hero[] {
  //  return HEROES;
  //}
  //getHeroes(): Observable<Hero[]> {
  //  this.messageService.add('HeroService: fetched heroes');
  //  return of(HEROES);
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, 
    // the array of mock heroes.
  //}
  // We are replacing the mock-file with a HTTP data source using in memory api
  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  // constructor() { }
  constructor(private http: HttpClient, private messageService: MessageService) { }
  // This is a typical "service-in-service" scenario: 
  // you inject the MessageService into the HeroService 
  // which is injected into the HeroesComponent.

  //getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
  //  this.messageService.add(`HeroService: fetched hero id=${id}`);
  //  return of(HEROES.find(hero => hero.id === id));
  //} //This was added in the routing exercises
  // Commented out as we are now using the HTTP version of the function

  // Keep injecting the MessageService. You'll call it so frequently that 
  // you'll wrap it in a private log() method.
  // Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  //Define the heroesUrl of the form :base/:collectionName with the 
  // address of the heroes resource on the server. 
  // Here base is the resource to which requests are made, 
  //and collectionName is the heroes data object in the in-memory-data-service.ts.

  private heroesUrl = 'api/heroes';  // URL to web api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
    /*
    * The above handleError() will be shared by many HeroService methods 
    * so it's generalized to meet their different needs.
    * Instead of handling the error directly, it returns an error handler 
    * function to catchError that it has configured with both the name of 
    * the operation that failed and a safe return value.
    *
    */
  }
  //Get hero by id
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`; // heroesUrl defined above
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /**
   * The HttpClient.put() method takes three parameters
   * a) the URL
   * b) the data to update (the modified hero in this case)
   * c) options
   * The URL is unchanged. The heroes web API knows which hero to update by 
   * looking at the hero's id.
   * The heroes web API expects a special header in HTTP save requests. 
   * That header is in the httpOptions constant defined in the HeroService.
   */

  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  // HeroService.addHero() differs from updateHero in two ways.
  // 1. it calls HttpClient.post() instead of put().
  // 2. it expects the server to generate an id for the new hero, 
  // which it returns in the Observable<Hero> to the caller.


  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  // Note that
  // it calls HttpClient.delete.
  // the URL is the heroes resource URL plus the id of the hero to delete
  // you don't send data as you did with put and post.
  // you still send the httpOptions.

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

}

// Components shouldn't fetch or save data directly 
// and they certainly shouldn't knowingly present fake data. 
// They should focus on presenting data and delegate data access to a service.

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};