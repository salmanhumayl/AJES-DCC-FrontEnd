import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


  export class MessengerService {

    private productmessage=new Subject();
  
    isLoggedIn$=new BehaviorSubject(false);
    isWelComeName$=new BehaviorSubject('');

  }
