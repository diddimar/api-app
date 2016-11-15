import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'countries-component',
    templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {

    countries;

    constructor(
         private http: Http
    ) { }

    ngOnInit() { 
        this.getCountries();
    }

    getCountries() {
    this.http.get('https://restcountries.eu/rest/v1/all')
    .map(res => res.json())
    .subscribe((country) => {
      this.countries = country;
    })
  }
}