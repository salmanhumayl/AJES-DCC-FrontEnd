import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import{BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { DCCOnGoing } from '../../../Models/DCCOnGoing';


import { AJESService } from '../../../service/app.service';
import { NgForm } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-outgingadd',
  templateUrl: './outgoingAdd.component.html',
  providers: [AJESService]  
})
export class outgoingAddComponent  {
  items:DCCOnGoing=new DCCOnGoing();
  isViewLoading:boolean=false;
  selectedFile: File;
  project:string;
  description:string;


  datePickerConfig:Partial<BsDatepickerConfig>;

   @ViewChild('message') displaymessage: ElementRef;   

    constructor(private AJESservice:AJESService,private router:Router,private activeRouter:ActivatedRoute,private ngxService: NgxUiLoaderService)
    {
      this.datePickerConfig=Object.assign({},
        {
          todayHighlight: true,
          containerClass:'theme-dark-blue',
          showWeekNumbers:false,
          dateInputFormat:'DD/MM/YYYY',
          customTodayClass:'custom-today-class'
         
          
        });

        this.project=  this.activeRouter.snapshot.paramMap.get('project');
        this.description =  this.activeRouter.snapshot.paramMap.get('description');
    }
    
  
   onFormSubmit(form:NgForm){
    
    this.ngxService.start();
   // this.isViewLoading=true;

   const formData=new FormData();
   var datestr=(new Date(this.items.date)).toUTCString();
    
    formData.append("Date", datestr);
    formData.append("Orign", this.items.orign);
    formData.append("CorresType", this.items.corresType);
    formData.append("FileNo", this.items.fileNo);
    formData.append("subject", this.items.subject);
    formData.append("address", this.items.address);
    formData.append("typist", this.items.typist);
    formData.append("remarks", this.items.remarks);
    formData.append("document", this.selectedFile);
    

    this.AJESservice.PostDiscussion(formData).subscribe((response)=>{
    //  console.log(response);
       var result=JSON.parse(JSON.stringify(response));
         this.isViewLoading=false;
         this.displaymessage.nativeElement.innerHTML=result.message;
         form.reset();
         this.ngxService.stop();
        });
  }

  chooseFile(event:any)
  {
      this.selectedFile =event.target.files[0];
     

  }
  goback(){

    this.router.navigate(['register/Out',this.project,this.description]);
  }
  
}
