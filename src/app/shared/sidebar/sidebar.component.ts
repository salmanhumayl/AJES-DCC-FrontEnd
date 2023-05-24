import { Component,OnInit} from '@angular/core';
import { AJESService } from '../../app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './Sidebar.component.html',
  providers: [AJESService] 
})
export class SidebarComponent implements OnInit {
  RFQDetail:any[];

  
 constructor(private AJESservice:AJESService){




 }

 ngOnInit(): void {
   
    this.GetMenu();
}
GetMenu(){
  this.AJESservice.getmenu().subscribe((data)=>  {

        this.RFQDetail=data;
    
      // console.log(this.RFQDetail[0].name);
      // console.log(this.RFQDetail[1].dccProjectFolders[1].folder.folderName);
      });

    }    





}
