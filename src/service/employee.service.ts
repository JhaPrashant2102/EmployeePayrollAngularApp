import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseURL = "/assets/JSON/employee.json";
  constructor(private http:HttpClient) { }

  public get(): Observable<any>{
    return this.http.get<any>(this.baseURL);
  }
}