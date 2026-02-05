import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';

export const routes: Routes = [
    // users route
    {
        path:'users', loadChildren:()=>import('./users/users-module')
.then(m=>m.UsersModule) 
   },

//    company
{
    path:'company',loadChildren:()=>import('./company/company-module').then(m=>m.CompanyModule)
},
    {
        path:'',component:LandingPage
    }
];
