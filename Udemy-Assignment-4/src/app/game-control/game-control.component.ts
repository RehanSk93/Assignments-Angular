import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // passing data child to parent component
  @Output() intervalFired = new EventEmitter<number>();

  // create a property to store data
  interval;

  // to store increment value
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  // Start the game
  onStartGame(){
    // setInterval is a javaScript inbuilt method
    // Inside this method we have to pass an arrow function 
    // and set time of interval;
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }


  // Stop the game
  onStopGame(){
    // clearInterval is a javaScript inbuilt method
    clearInterval(this.interval);
  }

}
