import { Component,OnInit} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { AJESService } from '../../service/app.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-submenu',
  templateUrl: './menu.component.html'
 // providers: [AJESService] 
})
export class SubmenuComponent implements OnInit {
  RFQDetail:any[];
  folderid:number;
  isloaded:boolean=false;
  production:boolean=environment.production;
 
  //const id = + this.route.snapshot.paramMap.get('id');
  
 constructor(private AJESservice:AJESService,private route:ActivatedRoute){}
   

 ngOnInit(): void {
   
     this.route.paramMap.subscribe(params => {
     this.folderid= +params.get('folderid');
     this.getregister();
     

   });

 }

  getregister(){
    this.AJESservice.getregister(this.folderid).subscribe((data)=>  {

      this.RFQDetail=data;
      this.isloaded=true;
     // console.log(this.RFQDetail);
    });
  }


 

}


  






