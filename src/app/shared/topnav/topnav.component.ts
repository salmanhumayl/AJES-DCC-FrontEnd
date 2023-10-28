import { Component, Input, OnInit,AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';
<<<<<<< HEAD

import { MessengerService } from '../../service/messenger.service';

=======
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
declare const $:any;

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html'
})
export class TopnavComponent implements AfterViewInit  {
  
  lEmptyCard:boolean=false;
<<<<<<< HEAD
  Name:string;

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    this.msg.isWelComeName$.subscribe(data => this.Name= data);
  }
=======

  constructor() { }
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3

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
