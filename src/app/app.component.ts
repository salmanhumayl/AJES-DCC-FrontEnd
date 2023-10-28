import { Component,OnInit,AfterViewInit } from '@angular/core';
<<<<<<< HEAD
import { AJESService } from './service/app.service';
=======
import { AJESService } from './app.service';
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
import { AuthenticationService } from './service/authentication.service';
import { MessengerService } from './service/messenger.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AJESService]
})
export class AppComponent implements OnInit{
 
  IsAuth:string="";;
  isLoggedIn:boolean;

 constructor(private msg:MessengerService,private auth:AuthenticationService){

  }
  ngOnInit(): void {
    this.msg.isLoggedIn$.subscribe(data => this.isLoggedIn= data);
  }
  
      
  
 
}





