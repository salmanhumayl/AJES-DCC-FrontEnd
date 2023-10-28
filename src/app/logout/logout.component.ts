import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService } from '../service/authentication.service';
import {MessengerService} from '../service/messenger.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(public authService:AuthenticationService,
            private msg:MessengerService,
            private router:Router) { }

  ngOnInit(): void {
 
    this.authService.removeToken();
    this.msg.isLoggedIn$.next(false);
    this.msg.isWelComeName$.next('');

    if (environment.production)
    {
      window.location.href="http://ajes-webapp.ajes.ae/dcc";

    }
    else{
      window.location.href="http://localhost:4200/login";

    }
    

  }

}
