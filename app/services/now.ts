//our root app component
import {Component, Attribute} from '@angular/core'

@Component({
  selector: 'now-component',
  template: `
      <h4>{{date | date:"dd.MMM"}} {{date | date:"HH:mm"}}</h4>
     
    `
})
export class NowComponent {
   private date;
   
  constructor() { 
    this.date =  new Date(); 
    
    setInterval(() => {
        this.date =  new Date();
     }, 10000);
  } 

} 