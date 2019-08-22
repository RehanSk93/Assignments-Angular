import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Store Odd number in this array
  oddNumbers: number[] = [];
  

  // Store Odd number in this array
  evenNumbers: number[] = [];


  onIntervalFired(firedNumber: number){
    console.log(firedNumber);
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
