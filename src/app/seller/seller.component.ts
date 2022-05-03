import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellers :string[];
  constructor() { 
    this.sellers = ["Flipkart","Amazone","Mintra"];
  }
  public getSellers(){
    return this.sellers;
  }

  ngOnInit(): void {
  }

}
