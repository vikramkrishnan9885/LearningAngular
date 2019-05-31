import { NgModule } from '@angular/core';


////
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
// Import the HeroesComponent so you can reference it in a Route. 
// Then define an array of routes with a single route to that component.

import { DashboardComponent }   from './dashboard/dashboard.component';

import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
// A URL like ~/detail/11 would be a good URL for navigating to the Hero 
// Detail view of the hero whose id is 11.

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  // A typical Angular Route has two properties:
  // path: a string that matches the URL in the browser address bar.
  // component: the component that the router should create when navigating 
  // to this route

  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Add a default route

  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  //declarations: [],
  //imports: [
  //  CommonModule
  //]
  // You generally don't declare components in a routing module 
  // so you can delete the @NgModule.declarations array and 
  // delete CommonModule references too.

  imports: [ RouterModule.forRoot(routes) ],
  // Add RouterModule to the @NgModule.imports array and configure 
  // it with the routes in one step by calling RouterModule.forRoot() 
  // within the imports array
  // The method is called forRoot() because you configure the router at 
  // the application's root level. 
  // The forRoot() method supplies the service providers and 
  // directives needed for routing, and performs the initial navigation 
  // based on the current browser URL.
  exports: [ RouterModule ]
  // Add an @NgModule.exports array with RouterModule in it. 
  // Exporting RouterModule makes router directives available for use 
  // in the AppModule components that will need them.
})
export class AppRoutingModule { }
