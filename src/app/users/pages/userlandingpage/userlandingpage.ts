import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Apiservices } from '../../../../services/apiservices';

@Component({
  selector: 'app-userlandingpage',
  imports: [Header, Footer],
  templateUrl: './userlandingpage.html',
  styleUrl: './userlandingpage.css',
})
export class Userlandingpage {


constructor(private api:Apiservices){}

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

}
