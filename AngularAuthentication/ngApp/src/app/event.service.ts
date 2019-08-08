import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private specialEventURL = 'http://localhost:3000/api/special';
  private regularEventURL = 'http://localhost:3000/api/regular';

  constructor(private _http: HttpClient ) { }

  // fetching Data from database
  regularEvent(){
    return this._http.get<any>(this.regularEventURL);
  }

  // fetching Data from database
  specialEvent(){
    return this._http.get<any>(this.specialEventURL);
  }
}
