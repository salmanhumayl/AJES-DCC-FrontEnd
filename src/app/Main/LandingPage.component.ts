import { Component,OnInit} from '@angular/core';
import { AJESService } from '../service/app.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './LandingPage.component.html',
  providers: [AJESService] 
})
export class LandingComponent {

  
 constructor(private AJESservice:AJESService){




 }


}







