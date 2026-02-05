import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Companyindexpage } from './pages/companyindexpage/companyindexpage';
import { Jobaddpage } from './pages/jobaddpage/jobaddpage';

const routes: Routes = [
  {
    path:'',component:Companyindexpage
  },
  {
    path:'job-add-company',component:Jobaddpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
