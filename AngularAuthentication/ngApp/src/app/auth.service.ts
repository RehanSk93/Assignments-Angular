import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // property that store backend API URL
  private _registerURL = 'http://localhost:3000/api/register';
  private _loginURL = 'http://localhost:3000/api/login';

  // injected HttpClient module inside constructor
  constructor(private _http: HttpClient,
              private _router: Router) { }

  // Create a method for storing data inside DB
  registerUser( user ){
    return this._http.post<any>(this._registerURL, user);
  }

  // Create a method for checking login details
  userLogin( user ){
    return this._http.post<any>(this._loginURL, user);
  }

  //  get token from local storage  
  loggedIn(){
    //  (!!) this sign simple return boolean value
    return !!localStorage.getItem('token')
  }

  // delete token from local storage
  loggedOut(){
    localStorage.removeItem('token')
    this._router.navigate(['/regular'])
  }

  // fetching token value
  getToken(){
    return localStorage.getItem('token')
  }
  
}
