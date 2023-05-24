import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from "@angular/router";
import { DevExtremeModule,DxFileUploaderModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'; 

import { SubmenuComponent } from './Menu/Menu.component';
import { OutgoingListComponent } from './OnGoing/List/outgoinglist.component';
import { outgoingAddComponent } from './OnGoing/Add/outgoingAdd.component';
import { outgoingEditComponent } from './OnGoing/Edit/outgoingEdit.component';

const routes: Routes = [

  {
  
    path: "menu/:folderid",
    component: SubmenuComponent
  },
    {
      
      path: 'Out',
      component: OutgoingListComponent
    
    },
    {
      path: 'OutgoingAddNew',
      component: outgoingAddComponent
    },
    {
        path: 'OutgoingEdit/:ID',
        component: outgoingEditComponent
     }
  ]
  
  @NgModule({
    imports: [DevExtremeModule,DxFileUploaderModule,FormsModule, CommonModule,BsDatepickerModule.forRoot(),RouterModule.forChild(routes)],
    declarations: [OutgoingListComponent, outgoingAddComponent,outgoingEditComponent,SubmenuComponent],
    exports: [RouterModule]
  })
  export default class OutGoingModule { }
