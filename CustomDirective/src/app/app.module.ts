import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighLightDirectives } from './directives/basic-high-light.directive';
import { BetterHighLightDirective } from './directives/better-high-light.directive';
import { BestSolutionDirective } from './directives/best-solution.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirectives,
    BetterHighLightDirective,
    BestSolutionDirective
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
