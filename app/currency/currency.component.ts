import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'currency-component',
    templateUrl: './currency.component.html'
})
export class CurrencyComponent implements OnInit {
    
    currencyList;

    constructor(
        private http: Http
    ) { }

    ngOnInit() { 
        this.getCurrency();
    }

    getCurrency() {
        this.http.get('http://apis.is/currency/arion')
        .map(res => res.json())
        .subscribe((currency) => {
        this.currencyList = currency.results;
        })
    }

}