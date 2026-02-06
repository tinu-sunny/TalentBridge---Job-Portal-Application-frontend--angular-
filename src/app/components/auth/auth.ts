

import { Component } from '@angular/core';
import { Apiservices } from '../../../services/apiservices';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {

reqform!:FormGroup

  constructor(private api:Apiservices,private fb:FormBuilder){}

  ngOnInit(){
    this.reqform= this.fb.group({
      username:[' ',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:['',[Validators.required,Validators.email]],
      role:['',[Validators.required]],
      password:['',[Validators.required]]
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

}
