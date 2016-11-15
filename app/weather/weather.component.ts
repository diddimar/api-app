import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'weather-component',
    templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

    weatherOverview : string[];
    textaSpa = "5";

    weatherObservations: string[];
    countrySection= "isl";

    stationNumber = "1";
    observationName: string;
    observationTime: string;
    observationTemp: string;
    observationWind: string;
    observationWindDirection: string;
    observationDescription: string;
    
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


    vf(){
        this.countrySection = "vf";
    }

    nv(){
        this.countrySection = "nv";
    }
    
    na(){
        this.countrySection = "na";
    }

    al(){
        this.countrySection = "al";
    }

    br(){
        this.countrySection = "br";
    }

    mh(){
        this.countrySection = "mh";
    }

    af(){
        this.countrySection = "af";
    } 

    fa(){
        this.countrySection = "fa";
    }

    su(){
        this.countrySection = "su";
    }

    sa(){
        this.countrySection = "sa";
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
          this.observationDescription = observations.results[0].W;
        })
    }
    //======----faxafloi----------->>>
    rvk1(){
      this.stationNumber = "1";
      this.getObservations();
    }
    blfj1(){
      this.stationNumber = "1487";
      this.getObservations();
    }
    hell(){
      this.stationNumber = "31392";
      this.getObservations();
    }
    grv(){
      this.stationNumber = "1361";
      this.getObservations();
    }
    eirb(){
      this.stationNumber = "4038";
      this.getObservations();
    }
    selv(){
      this.stationNumber = "31380";
      this.getObservations();
    }


    //<<<<<<-------faxafloi-----====

    ak1(){
      this.stationNumber = "422";
      this.getObservations();
    }

//-----------------------TextaSpar----------------//
  getWeatherOverview() {
    this.http.get('http://apis.is/weather/texts/is?types=' + this.textaSpa)
    .map(res => res.json())
    .subscribe((overview) => {
      this.weatherOverview = overview.results;
    })
  }

  landinu(){
      this.textaSpa = "2";
      this.getWeatherOverview();
  }
  rvk(){
      this.textaSpa = "3";
      this.getWeatherOverview();
  }
  sudurland(){
      this.textaSpa = "31";
      this.getWeatherOverview();
  }
  faxafloi(){
      this.textaSpa = "32";
      this.getWeatherOverview();
  }
  breidafj(){
      this.textaSpa = "33";
      this.getWeatherOverview();
  }
  vestfirdir(){
      this.textaSpa = "34";
      this.getWeatherOverview();
  }
  strandir(){
      this.textaSpa = "35";
      this.getWeatherOverview();
  }
  nordurland(){
      this.textaSpa = "36";
      this.getWeatherOverview();
  }
  austurland(){
      this.textaSpa = "37";
      this.getWeatherOverview();
  }
  austfirdir(){
      this.textaSpa = "38";
      this.getWeatherOverview();
  }
  sausturland(){
      this.textaSpa = "39";
      this.getWeatherOverview();
  }

}