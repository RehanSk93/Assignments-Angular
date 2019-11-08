import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  constructor(public employeeService: EmployeeService,
              public router: Router) { }

  ngOnInit() {
  }

  updateEmployee(emp: Employee) {
    this.employeeService.updatingEmployee(emp).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list']);
      },
      err => console.log(err)
    );
  }

  createEmployee(emp: Employee) {
    this.employeeService.createEmployee(emp).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list']);
      },
      err => console.log(err)
    );
  }

  // When someone click the button we can decide here
  // if id value is null means we have to create new employee
  // if id value is present means, we have to update that particular id value
  createAndUpdateEmp(currentEmp: Employee) {
    console.log(currentEmp);
    if (currentEmp.id != null) {
      console.log('updated Employee calling here');
      this.updateEmployee(currentEmp);

    } else {
      console.log('Created Employee calling here');
      this.createEmployee(currentEmp);
    }
  }

}
