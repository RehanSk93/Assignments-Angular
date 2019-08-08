import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  private empLists: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.getEmployee()
  }

  getEmployee() {
    this.employeeService.getEmployee().subscribe(
      (res) => {
        this.empLists = res;
      }
    )
  }


  deleteEmp(id: number) {
    this.employeeService.deleteEmp(id).subscribe(
      result => {
        if(result){
         console.log(result)
        }
      },
      error =>{
        if (error){
          console.log(error)
        }
      }
    )
  }

  editEmployee(emp) {
    this.employeeService.currentEmployee = Object.assign({}, emp)
    this.router.navigate(['/create']);
  }

}
