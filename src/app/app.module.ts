import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {LandingComponent} from './Main/LandingPage.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopnavComponent,
    FooterComponent,
    LandingComponent,
    SidebarComponent
     

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
