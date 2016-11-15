import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'earthquake-component',
    templateUrl: './earthquake.component.html'
})
export class EarthquakeComponent implements OnInit {

    earthquake;

    constructor(
         private http: Http
    ) { }

    ngOnInit() { 
        this.getQuakes();
    }

    getQuakes() {
    this.http.get('http://apis.is/earthquake/is')
    .map(res => res.json())
    .subscribe((quake) => {
      this.earthquake = quake.results;
    })
  }
}