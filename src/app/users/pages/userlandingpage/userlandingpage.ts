import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Apiservices } from '../../../../services/apiservices';
import { CompanyRoutingModule } from "../../../company/company-routing-module";
import { Router } from '@angular/router';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userlandingpage',
  imports: [Header, Footer, CompanyRoutingModule],
  templateUrl: './userlandingpage.html',
  styleUrl: './userlandingpage.css',
})
export class Userlandingpage {


constructor(private api:Apiservices,
  private route:Router
){}

jobs:any=''

  ngOnInit(){
    this.jobviewstudent()
  }


  jobviewstudent(){

    this.api.jobviewusers().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.jobs=res
        console.log(this.jobs);
        
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }


  applyjob(jobid:any){

 this.route.navigateByUrl(`/users/job-view/${jobid}`)
  
  }

}
