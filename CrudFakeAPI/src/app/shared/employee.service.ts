import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

// Communicate data between JSON-Server and Angular 
const headerOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _empUrl = 'http://localhost:3000/Employee';


  // Define all field value emptyString and nullValue of number
  // initially it will be storing null or emptyString value 
  // otherwise [(ngModel)] showing undefined property error
  currentEmployee: Employee = {
    id: null,
    name: '',
    age: '',
    email: ''
  }

  // inject HttpClient for handel http request
  constructor(private _http: HttpClient) { }

  // fetch employee details from JSON-Server
  getEmployee(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this._empUrl, headerOption)
  }

  // Delete employee method
  deleteEmp(id: number): Observable<Employee> {
    return this._http.delete<Employee>(this._empUrl + '/' + id)
  }

  // Create employee for creating new employee into JSON-DB
  createEmployee(emp: Employee): Observable<Employee> {
    return this._http.post<Employee>(this._empUrl, emp)
  }

  // Updating employee for updating existing employee into JSON-DB
  updatingEmployee(emp: Employee): Observable<Employee> {
    return this._http.put<Employee>(this._empUrl + '/' + emp.id, emp)
  }

}
