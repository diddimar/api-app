import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'welcome-component',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

    jokeOfTheDay : string;

    constructor(
        private http: Http
              ) {}
    ngOnInit() {
        this.getJoke();
     }

     getJoke(){
    this.http.get('http://api.icndb.com/jokes/random')
    .map(res => res.json())
    .subscribe((joke) => {
      this.jokeOfTheDay = joke;
      this.jokeOfTheDay = joke.value.joke;
    })
  }

}