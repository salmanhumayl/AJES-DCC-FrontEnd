
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { MessengerService } from '../service/messenger.service';
import {loginmodel} from '../Models/loginmodel';
import {AJESService } from '../service/app.service';
import {DCCTokenResponse} from '../Models/DCCTokenResponse';

import { NgxUiLoaderService } from 'ngx-ui-loader';

import{NgForm} from '@angular/forms';
import { collapseAnimation } from 'angular-animations';
import { NotificationService } from '../service/notification.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AJESService]  
  })

  export class LoginComponent{

    LoginModel:loginmodel=new loginmodel();
    @ViewChild('message') displaymessage: ElementRef;   


    constructor(private AJESservice:AJESService,private router:Router,
      private notify:NotificationService,
      public authService: AuthenticationService,private msg:MessengerService,
      private ngxService: NgxUiLoaderService
      ) { }
  

    onSubmitlogin(form:NgForm){
      this.ngxService.start();

      this.AJESservice.Login(this.LoginModel).subscribe((response:any)=>{
             
        if (response.status=="ok"){
          this.authService.storeTokenvalidity(response.expiration);
          this.authService.storeToken(response.token);
          localStorage.setItem('Name', response.name);
          this.msg.isLoggedIn$.next(true);
          this.msg.isWelComeName$.next(response.name);
          this.router.navigate(['main']);  
          this.ngxService.stop();
         }
         else{
          this.notify.showError(response.message);
           //this.displaymessage.nativeElement.innerHTML=response.message;
           form.reset();
           this.ngxService.stop();
         }
         });


      
    }

  }

