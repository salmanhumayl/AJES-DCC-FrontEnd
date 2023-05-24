import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { LandingComponent } from './Main/LandingPage.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';



const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'main',component:LandingComponent},
    {path:'sidemenu',component:SidebarComponent},

    {path:'',component:LoginComponent},
   
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