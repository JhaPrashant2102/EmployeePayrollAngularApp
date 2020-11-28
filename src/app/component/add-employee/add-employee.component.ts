import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee = [];

  constructor(private userService: EmployeeService) { }
  
  getData(){
    this.userService.get()
                    .subscribe(response=>{this.employee = response;
                      console.log("Response"+response)
                      },
                      error => {
                        console.log(error);
                      }
                    )
  }
  ngOnInit(): void {
    this.getData();
  }