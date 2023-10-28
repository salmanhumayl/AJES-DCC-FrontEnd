import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { LogoutComponent } from './logout/logout.component';
=======
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3

import { LandingComponent } from './Main/LandingPage.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';



const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'main',component:LandingComponent},
    {path:'sidemenu',component:SidebarComponent},

    {path:'',component:LoginComponent},
<<<<<<< HEAD
    {path:'logout',component:LogoutComponent},

=======
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
   
    {
      path:'register',
      loadChildren: () => import('./Registers/outgoing.module').then(m => m.default)
    }
  
      
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }