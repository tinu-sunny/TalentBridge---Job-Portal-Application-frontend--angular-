import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservices } from '../../../../services/apiservices';

@Component({
  selector: 'app-jobaddpage',
  imports: [Header, Footer,ReactiveFormsModule],
  templateUrl: './jobaddpage.html',
  styleUrl: './jobaddpage.css',
})
export class Jobaddpage {


  jobaddform!:FormGroup

  constructor(private fb:FormBuilder,
               private api:Apiservices
  ){}



ngOnInit(){
  this.jobaddform=this.fb.group({
    title:['',[Validators.required]],
    category:['',[Validators.required]],
    type:['',[Validators.required]],
    description:['',[Validators.required]],
    requirements:['',[Validators.required]],
    workSetup:['',[Validators.required]],
    lastdate:['',[Validators.required]],
    location:['',[Validators.required]],
    min:['',[Validators.required]],
    max:['',[Validators.required]]

  })
}



  addjob(){

    if(this.jobaddform.valid){

      this.api.addjob(this.jobaddform.value).subscribe({
        next:(res)=>{
          console.log(res);
    alert('added')
    this.jobaddform.reset();          
        },
        error:(err)=>{
          console.log(err);
          alert('server error')
          
        }
      })

    }
    else{
      alert('fill the form')
    }
  }
  // 

}
