import { Component,ViewChild,ElementRef } from '@angular/core';
import { AJESService } from '../../../service/app.service';
import{ActivatedRoute} from '@angular/router';

import { AuthenticationService } from '../../../service/authentication.service';

import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { DxDataGridComponent } from 'devextreme-angular';
import { ThisReceiver } from '@angular/compiler';

import {DxFileUploaderComponent} from 'devextreme-angular/ui/file-uploader';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'OutGoingList',
  templateUrl: './outgoinglist.component.html',
  providers: [AJESService]
})
export class OutgoingListComponent {

  

  //filepath="http://localhost/PayrollService/DCCOutGoing/"

  filepath="https://ajes-webapp.ajes.ae/dccservice/DCCOutGoing/"
  name: string="";
  project:string;
  description:string;


 dataSource: any;
 url: string;
 //backendURL:string="https://localhost:44363/PayrollDaysMaster";

 key:number=0;
 retryButtonVisible = false;


 //uploadUrl = this.backendURL + '/BulkInsert';



  /* @ViewChild('uploadedImage') uploadedImageRef!: HTMLImageElement;

  @ViewChild('fileUploader') fileUploaderRef!: DxFileUploaderComponent; */


 constructor(private AJESservice:AJESService,private route:ActivatedRoute,public authService:AuthenticationService){

  this.project=  this.route.snapshot.paramMap.get('project');
  this.description =  this.route.snapshot.paramMap.get('description');
  
  
    //this.dataSource=service.getcompanies();
    this.url = environment.domain + "api/OutGoing";

    //this.url='http://localhost/payrollservice/BlottterMaster';

    //this.url='https://ajes-webapp.ajes.ae/BigDataService/BlottterMaster';

  ///this.url="https://ajes-webapp.ajes.ae/dccservice/api/OutGoing";

    
    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: `${this.url}/GetOutgoing`,
      insertUrl: `${this.url}/InsertDays`,
      updateUrl: `${this.url}/UpdateDays`,
      
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: false };
        ajaxOptions.headers={  
          "Authorization": 'Bearer ' + authService.getToken()
      } 
      },
    });

   
   
  }

 
}






