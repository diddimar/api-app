import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'petrol-component',
    templateUrl: './petrol.component.html'
})
export class PetrolComponent implements OnInit {
    
    petrolList;

    constructor(
        private http: Http
    ) { }

    ngOnInit() { 
        this.getPetrol();
    }

    getPetrol() {
        this.http.get('http://apis.is/petrol')
        .map(res => res.json())
        .subscribe((petrol) => {
        this.petrolList = petrol.results;
        })
    }

}