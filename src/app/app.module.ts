import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { TopnavComponent } from './shared/topnav/topnav.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import {LandingComponent} from './Main/LandingPage.component';
import { AppComponent } from './app.component';



import { NgxUiLoaderModule,NgxUiLoaderRouterModule  } from "ngx-ui-loader";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';




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
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    ToastrModule.forRoot({
      timeOut: 6500,
      positionClass: "toast-bottom-left",
      preventDuplicates: true,
    }),
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
