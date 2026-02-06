import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Apiservices } from '../../../../services/apiservices';
import { Router } from '@angular/router';



@Component({
  selector: 'app-jobviewpage',
  imports: [Header, Footer],
  templateUrl: './jobviewpage.html',
  styleUrl: './jobviewpage.css',
})
export class Jobviewpage {
data:any

constructor (private api:Apiservices,
  private route:Router
){}
  viewjob(){

    this.api.jobviewcomapny().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.data=res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }

  ngOnInit(){
    this.viewjob()
  }

  deletejob(deleteid:any){
if(confirm("Are you sure you want to delete?")){
    this.api.jobdelete(deleteid).subscribe({
      next:(res:any)=>{
        alert('deleted')
      },
      error:(err)=>{
        alert('server error')
      }
    })
  }

    
  }
  

  editjob(jobid:any){

    this.route.navigateByUrl(`/company/job-add-company/${jobid}`)

  }

}
