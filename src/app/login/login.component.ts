
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { MessengerService } from '../service/messenger.service';

import{NgForm} from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
  })

  export class LoginComponent{

    constructor(private router:Router,public authService: AuthenticationService,private msg:MessengerService
      ) { }
  

    onSubmitlogin(form:NgForm){
      this.authService.storeToken("ok");
      this.msg.isLoggedIn$.next(true);
      
      this.router.navigate(['main']);  

    }

  }

