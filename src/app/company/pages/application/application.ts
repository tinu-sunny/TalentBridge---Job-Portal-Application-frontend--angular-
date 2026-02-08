import { Component, OnInit } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Apiservices } from '../../../../services/apiservices';

@Component({
  selector: 'app-application',
  imports: [Header, Footer],
  templateUrl: './application.html',
  styleUrl: './application.css',
})
export class Application implements OnInit {


  jobdata:any=''
  constructor (private api:Apiservices){}
  // all  application

  ngOnInit(): void {
    this.getallAplication()
  }
getallAplication(){

  this.api.allaplictioncompanyview().subscribe({
    next:(res)=>{
      console.log(res);
      this.jobdata=res
      console.log(this.jobdata);
      
      
    },

    error:(err)=>{
      console.log(err);
      
    }

  })



}




approve(item:any){

const itemid=item
  const data:any={status:2}
  this.api.updateApplicationStatus(itemid,data).subscribe({
    next:(res)=>{
      console.log(res);
  alert('approved')
  window.location.reload()
      
    },

    error:(err)=>{
      console.log(err);
      
    }
  })
}

rejected(item:any){
const itemid=item
  const data:any={status:3}
  this.api.updateApplicationStatus(itemid,data).subscribe({
    next:(res)=>{
      console.log(res);
  alert('rejected')
  window.location.reload()
      
    },

    error:(err)=>{
      console.log(err);
      
    }
  })
}










}
