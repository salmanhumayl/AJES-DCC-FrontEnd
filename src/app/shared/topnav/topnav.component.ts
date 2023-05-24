import { Component, Input, OnInit,AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';
declare const $:any;

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html'
})
export class TopnavComponent implements AfterViewInit  {
  
  lEmptyCard:boolean=false;

  constructor() { }

  ngAfterViewInit(){
   
    this.toggleSideBar();


  }


  toggleSideBar (){

    
    if ($('.toggle-sidebar-btn')) {
     
      $(document).on('click', '.toggle-sidebar-btn', function(e) {
       // $(document).select('body').classList.toggle('toggle-sidebar')
       var body = document.getElementsByTagName("body")[0];
       body.classList.toggle('toggle-sidebar');
      })
    }
  }

}
