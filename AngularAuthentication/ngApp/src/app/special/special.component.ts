import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
// Step - 1
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// logout functionality 

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
}) //   
export class SpecialComponent implements OnInit {

  specialEvents = []
  // Step - 2
  constructor(private _eventService: EventService,
              private _router: Router) { }

  ngOnInit() {
    this._eventService.specialEvent()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

}
