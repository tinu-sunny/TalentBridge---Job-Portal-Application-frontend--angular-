import { Component, OnInit } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Apiservices } from '../../../../services/apiservices';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobview',
  imports: [Header, Footer],
  templateUrl: './jobview.html',
  styleUrl: './jobview.css',
})
export class Jobview implements OnInit {

  constructor(private api:Apiservices,
    private idfromroute:ActivatedRoute
  ){}


 jobdata:any=''

 ngOnInit(){

  this.jobviewbyid()
 }

jobviewbyid(){
   
    const id = this.idfromroute.snapshot.paramMap.get('id');
  console.log(id);

  this.api.jobviewbyid(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.jobdata=res
      console.log(this.jobdata);
      
      
    },

    error:(err)=>{
      console.log(err);
      
    }
  })
}

savejob(){
  alert('job  saved ')
}

applyjob(){

// appllyed user email
 const user = sessionStorage.getItem("loginuser");
 const data = {useremail:user,jobid:this.jobdata.id,status:1}
 this.api.jobapplied(data).subscribe({
  next:(res:any)=>{
    console.log(res);
  alert("applyed for this job")
    
  },

  error:(err)=>{
    console.log(err);
    
  }
 })

}




}
