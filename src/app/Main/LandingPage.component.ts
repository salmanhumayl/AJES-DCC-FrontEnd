import { Component,OnInit} from '@angular/core';
<<<<<<< HEAD
import { AJESService } from '../service/app.service';
=======
import { AJESService } from '../app.service';
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3

@Component({
  selector: 'app-landingpage',
  templateUrl: './LandingPage.component.html',
  providers: [AJESService] 
})
export class LandingComponent {

  
 constructor(private AJESservice:AJESService){




 }


}







