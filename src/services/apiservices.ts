import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {

  baseurl:string=' http://localhost:3000'
  constructor(private http:HttpClient){}
  

 adduser(data:any){
  return this.http.post(`${this.baseurl}/users`, data);
}
}
