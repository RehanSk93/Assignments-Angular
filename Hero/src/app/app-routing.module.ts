import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const router: Routes = [
  { path: '', redirectTo: "dashboard", pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heros', component: HerosComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
