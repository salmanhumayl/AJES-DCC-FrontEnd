import { Component,OnInit} from '@angular/core';
<<<<<<< HEAD
import { AJESService } from '../../service/app.service';
=======
import { AJESService } from '../../app.service';
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3

import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-sidebar',
  templateUrl: './Sidebar.component.html',
  providers: [AJESService] 
})
export class SidebarComponent implements OnInit {
  RFQDetail:any[];
  isViewLoading:boolean=false;

  
 constructor(private AJESservice:AJESService,private ngxService: NgxUiLoaderService){




 }

 ngOnInit(): void {
  
  
    this.GetMenu();
  
  
}
GetMenu(){
  this.isViewLoading=true;
  this.AJESservice.getmenu().subscribe((data)=>  {

        this.RFQDetail=data;
        this.isViewLoading=false;  
      // console.log(this.RFQDetail[0].name);
      // console.log(this.RFQDetail[1].dccProjectFolders[1].folder.folderName);
      });

    }    





}
