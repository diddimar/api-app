import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { FlightComponent }  from '../flight/flight.component';
import { ConcertComponent }  from '../concert/concert.component';
import { EarthquakeComponent }  from '../earthquake/earthquake.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'flights',  component: FlightComponent },
  { path: 'concerts',  component: ConcertComponent },
  { path: 'earthquakes',  component: EarthquakeComponent }


  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
