import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.css']
})
export class RegularComponent implements OnInit {

  // Create an array for storing data
  regularEvents = []

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    // call the service method from here 
    this._eventService.regularEvent()
      .subscribe(
        res => {
          this.regularEvents = res;
          console.log(this.regularEvents);
        },
        err => console.log(err)
      )
  }
}
