import { Component,OnInit,AfterViewInit } from '@angular/core';
import { AJESService } from './service/app.service';
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





