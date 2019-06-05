import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 
import { AppComponent } from './app.component';
import { WelcomeComponent } from "./welcome/welcome.component";


const routes: Routes = [
  { path: 'app', component: WelcomeComponent },
  { path: 'ships', loadChildren: './starships/starships.module#StarshipsModule' },
  { path: '',   redirectTo: '/app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
