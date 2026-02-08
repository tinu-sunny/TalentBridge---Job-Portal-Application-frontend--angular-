import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {

  // baseurl:string=' http://localhost:3000' 
  baseurl:string='https://talentbridge-job-portal-application.onrender.com'
  constructor(private http:HttpClient){}
  

 adduser(data:any){
  return this.http.post(`${this.baseurl}/users`, data);
}
  // users?email=tinu@gmail.com


loginuser(data:any){
  return this.http.get(`${this.baseurl}/users?email=${data}`)
}

addjob(data:any){
  return this.http.post(`${this.baseurl}/jobs`,data)
}

jobviewcomapny(){
  return this.http.get(`${this.baseurl}/jobs`)
}

jobdelete(id:any){
  return this.http.delete(`${this.baseurl}/jobs/${id}`)
}

jobdataID(id:any){
    return this.http.get(`${this.baseurl}/jobs/${id}`)

}

jobupddate(id:any,data:any){
    return this.http.patch(`${this.baseurl}/jobs/${id}`,data)

}

jobviewusers(){
  return this.http.get(`${this.baseurl}/jobs`)
}

jobviewbyid(id:any){
    return this.http.get(`${this.baseurl}/jobs/${id}`)

}

jobapplied(data:any){
  return this.http.post(`${this.baseurl}/application`,data)
}


allaplictioncompanyview(){
  return this.http.get(`${this.baseurl}/application`)
}

// update application status

updateApplicationStatus(itemid:any,data:any){
  return this.http.patch(`${this.baseurl}/application/${itemid}`,data)
}






// 

}
