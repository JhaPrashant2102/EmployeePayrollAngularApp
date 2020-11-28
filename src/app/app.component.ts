import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employee = [];

  ngOnInit(){
    // this.employee=this.data;
  }

  title = 'EmployeePayroll';
}