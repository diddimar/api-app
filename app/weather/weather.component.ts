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

    weatherForecast : string[];
    
    toggle: boolean;

    constructor(
         private http: Http
    ) { }

    ngOnInit() { 
         this.getWeatherOverview();
         this.getWeatherForecast();
    }

    textaSpar(){
        this.toggle = false;
    }

    eitthvadAnnad(){
        this.toggle = true;
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


  getWeatherForecast(){
     this.http.get('http://apis.is/weather/forecasts/is?stations=1')
    .map(res => res.json())
    .subscribe((forecast) => {
      this.weatherForecast = forecast.results;
    })
  }

}