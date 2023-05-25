import { Component,OnInit} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { AJESService } from '../../app.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './menu.component.html',
  providers: [AJESService] 
})
export class SubmenuComponent implements OnInit {
  RFQDetail:any[];
  folderid:number;
  isloaded:boolean=false;
 
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


  






