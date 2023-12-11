import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { DevExtremeModule,DxFileUploaderModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'; 

import { SubmenuComponent } from './Menu/Menu.component';
import { OutgoingListComponent } from './OnGoing/List/outgoinglist.component';
import { outgoingAddComponent } from './OnGoing/Add/outgoingAdd.component';
import { outgoingEditComponent } from './OnGoing/Edit/outgoingEdit.component';


import { IncomingListComponent } from './InComing/List/incominglist.component';

const routes: Routes = [

  {
  
    path: "menu/:folderid",
    component: SubmenuComponent
  },
    {
      
      path: 'Out/:project/:description',
      component: OutgoingListComponent
    
    },

    {
      
      path: 'In/:project/:description',
      component: IncomingListComponent
    
    },
    {
      path: 'OutgoingAddNew/:project/:description',
      component: outgoingAddComponent
    },
    {
        path: 'OutgoingEdit/:ID/:project/:description',
        component: outgoingEditComponent
     }
  ]
  
  @NgModule({
    imports: [
      DevExtremeModule,DxFileUploaderModule,FormsModule, 
      CommonModule,BsDatepickerModule.forRoot(),
      RouterModule.forChild(routes)
    ],
    declarations: [OutgoingListComponent, outgoingAddComponent,outgoingEditComponent,SubmenuComponent, IncomingListComponent],
    exports: [RouterModule]
  })
  export default class OutGoingModule { }
