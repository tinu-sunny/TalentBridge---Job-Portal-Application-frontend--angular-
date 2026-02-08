

import { Component } from '@angular/core';
import { Apiservices } from '../../../services/apiservices';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {

reqform!:FormGroup
loginform!:FormGroup

  constructor(private api:Apiservices,private fb:FormBuilder,private route:Router){}

  ngOnInit(){
    this.reqform= this.fb.group({
      username:[' ',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:['',[Validators.required,Validators.email]],
      role:['',[Validators.required]],
      password:['',[Validators.required]]
    })


    this.loginform= this.fb.group({
      lemail:['',[Validators.required,Validators.email]],
      lpassword:['',[Validators.required]]
    })
  }


  
  req:boolean=false
  btnclickreg(){
    this.req=true
  }

  btnclicklog(){
        this.req=false

  }

// register user 

requser(){

  
  if(this.reqform.valid){
   
     this.api.adduser(this.reqform.value).subscribe({

    next:(res)=>{
      console.log(res);
      alert("User Registered Successfully");
      this.reqform.reset();
    },

    error:(err)=>{
      console.log(err);
      alert("Server error");
    }

  });
  }
  else{
    alert('Please fill the form')
  }


}

data:string=''
// login 

userlogin(){

if(this.loginform.valid){
  console.log(this.loginform.value.lemail);
// password:String=this.loginform
  this.api.loginuser(this.loginform.value.lemail).subscribe({
    next:(res:any)=>{
      console.log(res);
if(res.length > 0){
      if(res[0].password==this.loginform.value.lpassword){
        alert("login")
        
        const useremail = res[0].email

        sessionStorage.setItem('loginuser',useremail)

        if(res[0].role=='user'){
 this.route.navigateByUrl('/users')
        }
        else{
           this.route.navigateByUrl('/company')
        }
      
      }
      else{
        alert('password missmatch')
      }}
      else{
        alert('email is not registered')
      }
  
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })

}
else{
  alert('fill the form')
}

}


// 

}
