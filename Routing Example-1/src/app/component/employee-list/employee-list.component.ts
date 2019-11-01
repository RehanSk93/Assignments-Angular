import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  addForm = false;

  employeeList: Employee[];

  positions = ['UI Developer', '.NET Developer', 'Java Developer', 'React Developer', 'Angular Developer'];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.showEmployee();
  }

  showEmployee() {
    this.employeeService.getEmployeeDetails().subscribe((res) => {
      this.employeeList = res;
    });
  }


  showFormFiled() {
    this.addForm = !this.addForm;
  }

  onSubmitForm(empDetails: Employee) {
    this.employeeService.postSingleDetails(empDetails).subscribe((res) => {
      console.log(res);
    });
  }
}
