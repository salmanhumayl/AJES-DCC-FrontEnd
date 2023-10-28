
<<<<<<< HEAD
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
=======
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { MessengerService } from '../service/messenger.service';

import{NgForm} from '@angular/forms';
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
<<<<<<< HEAD
    providers: [AJESService]  
=======
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
  })

  export class LoginComponent{

<<<<<<< HEAD
    LoginModel:loginmodel=new loginmodel();
    @ViewChild('message') displaymessage: ElementRef;   


    constructor(private AJESservice:AJESService,private router:Router,public authService: AuthenticationService,private msg:MessengerService,
      private ngxService: NgxUiLoaderService
=======
    constructor(private router:Router,public authService: AuthenticationService,private msg:MessengerService
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
      ) { }
  

    onSubmitlogin(form:NgForm){
<<<<<<< HEAD
      this.ngxService.start();

      this.AJESservice.Login(this.LoginModel).subscribe((response:any)=>{
      
       // console.log(result);
      //  alert(response.status);
       
       
        if (response.status=="ok"){
          this.authService.storeTokenvalidity(response.expiration);
          this.authService.storeToken(response.token);
          this.msg.isLoggedIn$.next(true);
          this.msg.isWelComeName$.next(response.name);
          this.router.navigate(['main']);  
          this.ngxService.stop();
         }
         else{
           this.displaymessage.nativeElement.innerHTML=response.message;
           form.reset();
           this.ngxService.stop();
         }
         });


      
=======
      this.authService.storeToken("ok");
      this.msg.isLoggedIn$.next(true);
      
      this.router.navigate(['main']);  

>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
    }

  }

