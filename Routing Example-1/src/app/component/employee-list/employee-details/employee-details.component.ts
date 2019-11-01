import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/model/employee.model';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails: Employee;
  showForm = false;
  showTable = true;
  positions = ['UI Developer', '.NET Developer', 'Java Developer', 'React Developer', 'Angular Developer'];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.employeeService.getSingleEmployee(id).subscribe((res) => {
        this.employeeDetails = res as Employee;
      });
    });
  }


  onUpdateDetails() {
    this.showForm = true;
    this.showTable = false;
  }

  onSubmitDetails(empDetail: Employee) {
    const empID = this.employeeDetails.id;
    this.employeeService.updateEmpDetails(empID, empDetail).subscribe((res) => {
      this.employeeDetails = res as Employee;
    });
  }

  onDelete() {
    const empID = this.employeeDetails.id;
    if (confirm('Are you sure want to delete') === true) {
      this.employeeService.deleteEmployee(empID).subscribe((res) => {
        this.router.navigate(['/employee-list']);
      });
    }
  }

}
