import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservices } from '../../../../services/apiservices';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobaddpage',
  imports: [Header, Footer,ReactiveFormsModule],
  templateUrl: './jobaddpage.html',
  styleUrl: './jobaddpage.css',
})
export class Jobaddpage {





  jobaddform!:FormGroup
  jobaddformedit!:FormGroup

  constructor(private fb:FormBuilder,
               private api:Apiservices,
               private idfromrout:ActivatedRoute,
               private route:Router
  ){}

editid:any=''
editdata:any=''


ngOnInit(){

  const id = this.idfromrout.snapshot.paramMap.get('id');
  console.log(id);
  this.editid=id

  

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

  if(this.editid){
    this.geteditdata(this.editid);
  }

    this.jobaddformedit=this.fb.group({
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



geteditdata(editid:any){

this.api.jobdataID(editid).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.editdata=res
     this.jobaddformedit.patchValue(res);

    
    
  },
  error:(err)=>{

    console.log(err);
    
  }
})

}


editjob(){

  if(this.jobaddformedit.valid){

    this.api.jobupddate(this.editid,this.jobaddformedit.value).subscribe({
      next:(res:any)=>{
  alert('update')
  this.route.navigateByUrl('/company/job-view-company')


      },
      error:(err)=>{
        console.log(err);
        alert('server err')
        
      }
    })

  }

}









  // 

}
