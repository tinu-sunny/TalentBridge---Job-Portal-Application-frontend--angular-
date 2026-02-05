import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';

export const routes: Routes = [
    {
        path:'users', loadChildren:()=>import('./users/users-module')
.then(m=>m.UsersModule) 
   },
    {
        path:'',component:LandingPage
    }
];
