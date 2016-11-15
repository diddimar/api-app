import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { NavComponent }  from './nav/nav.component';
import { MainComponent }  from './main/main.component';
import { WelcomeComponent }  from './welcome/welcome.component';
import { FlightComponent }  from './flight/flight.component';
import { ConcertComponent }  from './concert/concert.component';

import { AppRoutingModule }  from './services/app-routing.module'; 

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule
  
   ],
  declarations: [ 
    AppComponent,
    NavComponent,
    MainComponent,
    WelcomeComponent,
    FlightComponent,
    ConcertComponent
    
    
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
