import { Component, Input, OnInit,AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

import { MessengerService } from '../../service/messenger.service';

declare const $:any;

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html'
})
export class TopnavComponent implements AfterViewInit  {
  
  lEmptyCard:boolean=false;
  Name:string;

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    this.msg.isWelComeName$.subscribe(data => this.Name= data);
  }

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
