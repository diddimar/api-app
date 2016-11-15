import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'flight-component',
    templateUrl: './flight.component.html'
})
export class FlightComponent implements OnInit {

    flightArrivals:  string[];
    numberOfArrivals : number;

    flightDepartures: string[];
    numberOfDepartures : number;

    toggle: boolean;

    constructor(
        private http: Http
    ) { }

    ngOnInit() {
        this.getArrivals();
     }

    getArrivals() {
        this.http.get('http://apis.is/flight?language=en&type=arrivals')
        .map(res => res.json())
        .subscribe((arrivals) => {
          this.flightArrivals = arrivals.results;
          this.numberOfArrivals = this.flightArrivals.length;
          this.toggle = true;
        })
    }

    getDepartures() {
        this.http.get('http://apis.is/flight?language=en&type=departures')
        .map(res => res.json())
        .subscribe((departures) => {
          this.flightDepartures = departures.results;
          this.numberOfDepartures = this.flightDepartures.length;
          this.toggle = false;
        })
    }

}