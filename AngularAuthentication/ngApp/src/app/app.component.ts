import { Component } from '@angular/core';
// Step - 1
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngAuthApp';

  // Step - 2
  constructor(private _authService: AuthService){ }
}
