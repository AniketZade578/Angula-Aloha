import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:number;
  name:string;
  hide:boolean;
  constructor() { 
    this.id=12;
    this.name = 'Aniket Zade';
    this.hide = true;
  }

  getId(){
    return this.id;
  }
  getName(){
    return this.name;
  }
  getHide(){
    return this.hide;
  }
  Toggle(){
    this.hide=!this.hide;
  }
  ngOnInit(): void {
  }

}
