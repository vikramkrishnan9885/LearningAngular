import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromShips from './store/reducers/ships.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShipsEffects } from './store/effects/ships.effects';
import { ShipListComponent } from './ship-list/ship-list.component';

// BUGFIXES DIRECTLY FROM GITHUB OF TUTORIAL
import { HttpClientModule } from '@angular/common/http';
import { StarshipRoutingModule } from './starships-routing.module';

@NgModule({
  declarations: [ShipListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('ships', fromShips.reducer),
    EffectsModule.forFeature([ShipsEffects]),
    HttpClientModule,
    StarshipRoutingModule,
  ]
})
export class StarshipsModule { }

/*
Feature modules are Angular modules that group a bunch of components/services, 
etc. into a module.  This allows us to separate concerns nicely.  
Most likely, you’ve dealt with feature modules if you have 1 month 
experience in Angular.  Since feature modules can be lazy loaded and 
because they are separate from the main app module, NgRx does things a 
little differently.
*/