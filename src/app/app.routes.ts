import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PonyComponent } from './pony/pony.component';
import { RacesComponent } from './races/races.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const ROUTES: Routes = [
{ path: '', component: HomeComponent },
{ path: 'races', component: RacesComponent },
// { path: 'paris', component: ParisComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'races/:raceId/ponies/:ponyId', component: PonyComponent }
];