import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Companyindexpage } from './pages/companyindexpage/companyindexpage';

const routes: Routes = [
  {
    path:'',component:Companyindexpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
