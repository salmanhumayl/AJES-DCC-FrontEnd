import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


  export class MessengerService {

    private productmessage=new Subject();
  
    isLoggedIn$=new BehaviorSubject(false);
    isWelComeName$=new BehaviorSubject('');

    constructor(){

      this.isLoggedIn$.subscribe();
      this.isWelComeName$.subscribe();
      this.initializeAuth();
    }

    initializeAuth() {
   // alert("initializeAuth");
      const token: any = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn$.next(true);
      this.isWelComeName$.next(localStorage.getItem('Name'));
    }
    else{
      this.clearAuth();
    }
    }

    clearAuth() {
      //alert("clearAuth");
      this.isLoggedIn$.next(false);
      this.isWelComeName$.next('');
      
      localStorage.removeItem('Name');
      localStorage.removeItem('token');
    
    }
  }
