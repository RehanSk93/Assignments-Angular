import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SpecialComponent } from './special/special.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AuthService } from './user-auth/auth.service';
import { from } from 'rxjs';
import { CssLoaderComponent } from './css-loader/css-loader.component';

// loader  
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SpecialComponent,
    UserAuthComponent,
    CssLoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
