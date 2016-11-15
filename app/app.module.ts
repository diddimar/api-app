import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { NavComponent }  from './nav/nav.component';
import { MainComponent }  from './main/main.component';
import { WelcomeComponent }  from './welcome/welcome.component';
import { FlightComponent }  from './flight/flight.component';
import { ConcertComponent }  from './concert/concert.component';
import { EarthquakeComponent }  from './earthquake/earthquake.component';
import { WeatherComponent }  from './weather/weather.component';
import { PetrolComponent }  from './petrol/petrol.component';
import { CurrencyComponent }  from './currency/currency.component';
import { CountriesComponent }  from './countries/countries.component';

import { NowComponent }  from './services/now';
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
    ConcertComponent,
    EarthquakeComponent,
    WeatherComponent,
    PetrolComponent,
    CurrencyComponent,
    CountriesComponent,
    
    NowComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
