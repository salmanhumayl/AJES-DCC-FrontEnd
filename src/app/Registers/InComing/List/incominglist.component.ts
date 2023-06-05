import { Component,ViewChild,ElementRef } from '@angular/core';
import { AJESService } from '../../../app.service';
import{ActivatedRoute} from '@angular/router';

import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { DxDataGridComponent } from 'devextreme-angular';
import { ThisReceiver } from '@angular/compiler';

import {DxFileUploaderComponent} from 'devextreme-angular/ui/file-uploader';


@Component({
  selector: 'app-incominglist',
  templateUrl: './incominglist.component.html',
  providers: [AJESService]
})
export class IncomingListComponent {

  filepath="http://localhost/PayrollService/DCCIncoming/"
  name: string="";
  project:string;
  description:string;


 dataSource: any;
 url: string;
 //backendURL:string="https://localhost:44363/PayrollDaysMaster";
  // backenURL:string="https://localhost:44359/api/OutGoing";
 key:number=0;
 retryButtonVisible = false;


 //uploadUrl = this.backendURL + '/GetOutComing';



  @ViewChild('uploadedImage') uploadedImageRef!: HTMLImageElement;

  @ViewChild('fileUploader') fileUploaderRef!: DxFileUploaderComponent;


 constructor(private AJESservice:AJESService,private route:ActivatedRoute){

  this.project=  this.route.snapshot.paramMap.get('project');
  this.description =  this.route.snapshot.paramMap.get('description');
  
  
    //this.dataSource=service.getcompanies();
    //this.url = 'https://localhost:44363/PayrollDaysMaster';

    this.url="https://localhost:44359/api/InComing";
    

    //this.url='https://ajes-webapp.ajes.ae/BigDataService/BlottterMaster';



    
    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: `${this.url}/GetInComing`,
      insertUrl: `${this.url}/InsertDays`,
      updateUrl: `${this.url}/UpdateDays`,
      
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: false };
      },
    });

   
   
  }

 
}
