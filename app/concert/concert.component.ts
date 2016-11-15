import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'concert-component',
    templateUrl: './concert.component.html'
})
export class ConcertComponent implements OnInit {

    concerts;

    constructor(
         private http: Http
    ) { }

    ngOnInit() { 
        this.getConcerts();
    }

    getConcerts() {
    this.http.get('http://apis.is/concerts')
    .map(res => res.json())
    .subscribe((concert) => {
      this.concerts = concert.results;
    })
  }
}