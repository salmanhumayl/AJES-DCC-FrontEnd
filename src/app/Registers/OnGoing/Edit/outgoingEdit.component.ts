import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import{BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { DCCOnGoing } from '../../../Models/DCCOnGoing';
<<<<<<< HEAD
import { AJESService } from '../../../service/app.service';
=======
import { AJESService } from '../../../app.service';
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
import { NgForm } from '@angular/forms';

import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-outgingEdit',
  templateUrl: './outgoingEdit.component.html',
  providers: [AJESService]
})
export class outgoingEditComponent implements OnInit  {
  items:DCCOnGoing;
  ID:number;
  isViewLoading:boolean=false;
  selectedFile: File;
  project:string;
  description:string;
<<<<<<< HEAD
  Ref:string;
=======

>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
  datePickerConfig:Partial<BsDatepickerConfig>;

   @ViewChild('message') displaymessage: ElementRef;   
   @ViewChild('BSubmit') savebutton: ElementRef;   //HTMLButtonElement
   
<<<<<<< HEAD

=======
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
  
    constructor(private AJESservice:AJESService,private activeRouter:ActivatedRoute, private router:Router,private ngxService: NgxUiLoaderService){
        this.ID=+this.activeRouter.snapshot.params['ID'];
       
        this.project=  this.activeRouter.snapshot.paramMap.get('project');
        this.description =  this.activeRouter.snapshot.paramMap.get('description');
       
        this.datePickerConfig=Object.assign({},
          {
            todayHighlight: true,
            containerClass:'theme-dark-blue',
            showWeekNumbers:false,
            dateInputFormat:'DD/MM/YYYY',
            customTodayClass:'custom-today-class'
           
            
          });
    }

    ngOnInit(): void {
        if (this.ID > 0 ){
          
         this.getItems();
        }
       
      }

      
      getItems()
  {
    
    this.AJESservice.GetRecordByID(this.ID).subscribe(
      {
        next:(products)=>{
        
           this.items=products;
           this.items.date=new Date(this.items.date);
<<<<<<< HEAD
           this.Ref=this.items.reference;
=======
           
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
           
        },
        complete:()=>{
          //this.loading=false;
        }
      }

    );
  }

  onFormSubmit(form:NgForm){
    
   // this.isViewLoading=true;

   this.ngxService.start();
   const formData=new FormData();
   var datestr=(new Date(this.items.date)).toUTCString();
    formData.append("reference",this.items.reference);
    formData.append("id", this.ID.toString())
    formData.append("Date", datestr);
    formData.append("Orign", this.items.orign);
    formData.append("CorresType", this.items.corresType);
    formData.append("FileNo", this.items.fileNo);
    formData.append("subject", this.items.subject);
    formData.append("address", this.items.address);
    formData.append("typist", this.items.typist);
    formData.append("remarks", this.items.remarks);
    formData.append("refno",this.items.refNo);
    formData.append("path",this.items.path);
    
    formData.append("document", this.selectedFile);
   
    this.AJESservice.EditPostDiscussion(formData,this.ID).subscribe((response)=>{
       var result=JSON.parse(JSON.stringify(response));
         this.isViewLoading=false;
         this.displaymessage.nativeElement.innerHTML=result.message;
<<<<<<< HEAD
        
         this.ngxService.stop();
        this.savebutton.nativeElement.disabled=true;
        this.Ref = "AJES/" + this.items.orign + "/" + this.items.corresType + "/" + this.items.fileNo + "/" + this.items.refNo;
        form.reset();
=======
         form.reset();
         this.ngxService.stop();
        this.savebutton.nativeElement.disabled=true;
         
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
        });
  }

  chooseFile(event:any)
  {
      this.selectedFile =event.target.files[0];
     

  }

  goback(){

    this.router.navigate(['/register/Out',this.project,this.description]);
  }



    }
  
  
  

