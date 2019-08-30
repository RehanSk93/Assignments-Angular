import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  // toggling button login and logout
  isLoginMode = true;

  // css spinner when data is fetching from server
  isLoading = false;

  // Showing error message to end-user
  errorMsg = null;



  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    // we always check first the form is valid or not
    if (!form.valid) {
      return
    }

    // now we extract out form data 
    const email = form.value.email;
    const pass = form.value.password;

    // when data is fetching we want to showing spinner
    this.isLoading = true;

    // We have to check toggling option, it's signUp or Login mode
    if (this.isLoginMode) {
      this.authService.logIn(email, pass).subscribe(resData => {
        console.log(resData);

        // after fetching data we don't want to showing spinner
        this.isLoading = false;

      }, errorRes => {
        console.log(errorRes);

        // Use service to handle error message..
        // here error is passing through pipe() method 
        this.errorMsg = errorRes;
        
        // after fetching error data we don't want to showing spinner
        this.isLoading = false;
      })

    } else {
      // we have to call service to pass user credential.
      this.authService.signUp(email, pass).subscribe(resData => {
        console.log(resData);

        // after fetching data we don't want to showing spinner
        this.isLoading = false;
      }, errorRes => {
        console.log(errorRes);

        // Use service to handle error message..
        // here error is passing through pipe() method 
        this.errorMsg = errorRes;
        
        // after fetching error data we don't want to showing spinner
        this.isLoading = false;
      })
    }
  }
}
