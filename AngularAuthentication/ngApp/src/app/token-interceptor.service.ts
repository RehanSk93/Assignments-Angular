// Second inject Injector
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

// First => we can't inject this service directly this is an error of Angular
// so we have to inject in different way using "Injector"
import { AuthService } from './auth.service'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _Injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // third  inject it like this way...
    let authService = this._Injector.get(AuthService)
    let tokenizerReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizerReq)
  }
}
