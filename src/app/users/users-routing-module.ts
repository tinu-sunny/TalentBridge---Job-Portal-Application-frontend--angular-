import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Userlandingpage } from './pages/userlandingpage/userlandingpage';

const routes: Routes = [
  {
    path:"", component:Userlandingpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
