import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddServerComponent } from './add-server/add-server.component';
import { ShowServerComponent } from './show-server/show-server.component';

@NgModule({
  declarations: [
    AppComponent,
    AddServerComponent,
    ShowServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
