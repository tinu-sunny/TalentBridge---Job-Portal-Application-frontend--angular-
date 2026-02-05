import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Userlandingpage } from './pages/userlandingpage/userlandingpage';
import { Jobview } from './pages/jobview/jobview';

const routes: Routes = [
  {
    path:"", component:Userlandingpage
  },
  {
    path:"job-view/:id", component:Jobview
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
