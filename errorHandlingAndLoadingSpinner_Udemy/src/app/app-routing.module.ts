import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpecialComponent } from './special/special.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'special', component: SpecialComponent },
  { path: 'auth', component: UserAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
