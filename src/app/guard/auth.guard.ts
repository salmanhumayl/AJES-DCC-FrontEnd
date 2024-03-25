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
        
     // this.router.navigate(['login'],{queryParams:{returnUrl:state.url}});
      this.router.navigate(['/login'], { replaceUrl: true });
    }
    return true;
  }
  
}