import { Component, OnInit } from '@angular/core';

//////////
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero: Hero = {
  //  id: 1,
  //  name: 'Windstorm'
  //};

  //heroes = HEROES;

  heroes: Hero[];
  selectedHero: Hero;
  
  // constructor() { }
  constructor(private heroService: HeroService) { }

  //ngOnInit() {
  //}
  ngOnInit() {
    this.getHeroes();
  }
  

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  // This will not work in a real app. 
  // You're getting away with it now because the service currently returns mock heroes. 
  // But soon the app will fetch heroes from a remote server, 
  // which is an inherently asynchronous operation.
}
