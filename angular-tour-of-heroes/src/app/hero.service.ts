import { Injectable } from '@angular/core';

////
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
// Note the Injectable tag and import { Injectable }


export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}

// Components shouldn't fetch or save data directly 
// and they certainly shouldn't knowingly present fake data. 
// They should focus on presenting data and delegate data access to a service.