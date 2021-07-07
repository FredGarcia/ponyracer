import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, FormBuilder} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { RaceComponent } from './race/race.component';
import { PonyComponent } from './pony/pony.component';
import { FromNowPipe } from './pipes/from-now.pipe';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { TranslatePipe } from './pipes/translate.pipe';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RacesComponent,
    RaceComponent,
    PonyComponent,
    FromNowPipe,
    HomeComponent,
    TranslatePipe,
    RegisterComponent,    
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)    
  ],
//  providers: [{ provide: HTTP_INTERCEPTORS, useExisting: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
