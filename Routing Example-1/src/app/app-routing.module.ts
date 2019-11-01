import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { ContactComponent } from './component/contact/contact.component';
import { EmployeeDetailsComponent } from './component/employee-list/employee-details/employee-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee-list', component: EmployeeListComponent, children: [
    {path: ':id', component: EmployeeDetailsComponent}
  ] },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
