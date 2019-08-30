import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Create an Interface for firebase response data for singUp and logIn methods
interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;   // this is extra property for signIn method
}

@Injectable()
export class AuthService {

    // This URL is provided by Firebase official documentation.
    // key=[API_KEY] = this is also provided firebase.
    readonly signUp_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAar1qPDiw-bRtjuk1Z_UYf1MDkXzIEMx4';


    // This URL is provided by Firebase official documentation.
    // key=[API_KEY] = this is also provided firebase.
    readonly signIn_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAar1qPDiw-bRtjuk1Z_UYf1MDkXzIEMx4';


    constructor(private http: HttpClient) { }


    // signUp logic and handling error...............
    signUp(email: string, pass: string) {
        return this.http.post<AuthResponseData>(this.signUp_URL,
            // Request Body Payload, recommended by firebase pass those fields, 
            {
                email: email,
                password: pass,
                returnSecureToken: true
            }
        ).pipe(catchError(errorRes => {
            let errorMessage = 'An unknown error occurred!';

            // this condition is occurred only if bellow condition will not matched
            if(!errorRes.error || !errorRes.error.error ){
                return throwError(errorMessage);
            }

            // Use switch case for handling multiple error....
            switch (errorRes.error.error.message) {
                case 'EMAIL_EXISTS' :
                    errorMessage = 'This email is already exist!';
            }

            // through error message so we can use it in our different different component
            return throwError(errorMessage);
        }))
    }


    // logIn method and handling error
    logIn(email: string, pass: string) {
        return this.http.post<AuthResponseData>(this.signIn_URL, 
            {
                email: email,
                password: pass,
                returnSecureToken: true
            }
            )
    }

}