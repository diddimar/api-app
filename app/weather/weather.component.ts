import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'weather-component',
    templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

    weatherOverview : string[];
    value = "5";

    weatherObservations: string[];

    stationNumber = "1";
    observationName: string;
    observationTime: string;
    observationTemp: string;
    observationWind: string;
    observationWindDirection: string;
    
    toggle: boolean;

    constructor(
         private http: Http
    ) { }

    ngOnInit() { 
         this.getWeatherOverview();
         this.getObservations();
    }

    texts(){
        this.toggle = false;
    }

    stations(){
        this.toggle = true;
    }

    getObservations() {
        this.http.get('https://crossorigin.me/http://apis.is/weather/observations/is?stations='+this.stationNumber+'&time=1h&anytime=0]')
        .map(res => res.json())
        .subscribe((observations) => {
          this.weatherObservations = observations.results[0];
          this.observationName = observations.results[0].name;
          this.observationTime = observations.results[0].time;
          this.observationTemp = observations.results[0].T;
          this.observationWind = observations.results[0].F;
          this.observationWindDirection = observations.results[0].D;
        })
    }
    rvk1(){
      this.stationNumber = "1";
      this.getObservations();
    }
    ak1(){
      this.stationNumber = "422";
      this.getObservations();
    }
    egl(){
      this.stationNumber = "571";
      this.getObservations();
    }

//-----------------------TextaSpar----------------//
  getWeatherOverview() {
    this.http.get('http://apis.is/weather/texts/is?types=' + this.value)
    .map(res => res.json())
    .subscribe((overview) => {
      this.weatherOverview = overview.results;
    })
  }

  landinu(){
      this.value = "2";
      this.getWeatherOverview();
  }
  rvk(){
      this.value = "3";
      this.getWeatherOverview();
  }
  sudurland(){
      this.value = "31";
      this.getWeatherOverview();
  }
  faxafloi(){
      this.value = "32";
      this.getWeatherOverview();
  }
  breidafj(){
      this.value = "33";
      this.getWeatherOverview();
  }
  vestfirdir(){
      this.value = "34";
      this.getWeatherOverview();
  }
  strandir(){
      this.value = "35";
      this.getWeatherOverview();
  }
  nordurland(){
      this.value = "36";
      this.getWeatherOverview();
  }
  austurland(){
      this.value = "37";
      this.getWeatherOverview();
  }
  austfirdir(){
      this.value = "38";
      this.getWeatherOverview();
  }
  sausturland(){
      this.value = "39";
      this.getWeatherOverview();
  }

}