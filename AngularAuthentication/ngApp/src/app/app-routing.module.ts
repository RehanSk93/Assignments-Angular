import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegularComponent } from './regular/regular.component';
import { SpecialComponent } from './special/special.component';
import { PnfoundComponent } from './pnfound/pnfound.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'regular', component: RegularComponent},
  {
    path: 'special', 
    component: SpecialComponent,
    canActivate: [AuthGuard]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PnfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }