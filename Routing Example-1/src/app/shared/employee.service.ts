import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly baseURL = 'http://localhost:3000/Employee';

  constructor(private http: HttpClient) { }

  getEmployeeDetails(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
  }

  getSingleEmployee(empID) {
    return this.http.get(this.baseURL + `/${empID}`);
  }

  postSingleDetails(empDetails: Employee) {
    return this.http.post(this.baseURL, empDetails);
  }

  updateEmpDetails(empID: number, empDetails: Employee) {
    console.log(empDetails);
    return this.http.put(this.baseURL + `/${empID}`, empDetails);
  }

  deleteEmployee(empID: number) {
    return this.http.delete(this.baseURL + `/${empID}`);
  }

}
