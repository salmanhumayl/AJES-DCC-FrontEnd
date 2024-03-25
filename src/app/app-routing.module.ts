import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { LandingComponent } from './Main/LandingPage.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { loginmodel } from './Models/loginmodel';
import { AuthGuard } from './guard/auth.guard';


const routes:Routes=[
    
    {path:'',component:LoginComponent,pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'main',component:LandingComponent,canActivate:[AuthGuard]},
    {path:'sidemenu',component:SidebarComponent},
    
    
    {path:'logout',component:LogoutComponent},

    {
      path:'register',
      loadChildren: () => import('./Registers/outgoing.module').then(m => m.default)
    }
  
   // {path:'**',redirectTo: '/login'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }