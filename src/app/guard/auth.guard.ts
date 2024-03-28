import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth:AuthenticationService,
              public router:Router){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if (!this.auth.isAuthenticated()){
        debugger;
     // this.router.navigate(['login'],{queryParams:{returnUrl:state.url}});
      this.router.navigate(['/login'], { replaceUrl: true });
      return false;
    }
    return true;
  }
  //the canActivate exists to prevent unauthorized users from accessing a route,



 
 
//The CanLoad Guard hinders the loading of the Lazy Loaded Module. 
//We generally use this guard when we do not need unauthorized routes of the module in any navigation.
}