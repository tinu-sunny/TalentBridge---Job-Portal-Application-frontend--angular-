import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Companyindexpage } from './pages/companyindexpage/companyindexpage';
import { Jobaddpage } from './pages/jobaddpage/jobaddpage';

import { Application } from './pages/application/application';

import { Jobviewpage } from './pages/jobviewpage/jobviewpage';

const routes: Routes = [
  {
    path:'',component:Companyindexpage
  },
  {
    path:'job-add-company',component:Jobaddpage
  },
    {
    path:'job-add-company/:id',component:Jobaddpage
  },
  {
    path:'job-view-company', component:Jobviewpage
  },
  {
    path:'job-application-view-comapny', component:Application
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
