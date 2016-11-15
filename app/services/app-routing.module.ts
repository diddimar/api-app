import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { FlightComponent }  from '../flight/flight.component';
import { ConcertComponent }  from '../concert/concert.component';
import { EarthquakeComponent }  from '../earthquake/earthquake.component';
import { WeatherComponent }  from '../weather/weather.component';
import { PetrolComponent }  from '../petrol/petrol.component';
import { CurrencyComponent }  from '../currency/currency.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'flights',  component: FlightComponent },
  { path: 'concerts',  component: ConcertComponent },
  { path: 'earthquakes',  component: EarthquakeComponent },
  { path: 'weather',  component: WeatherComponent },
  { path: 'petrol',  component: PetrolComponent },
  { path: 'currency',  component: CurrencyComponent }


  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
