import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  @Input() product : Product |null =null //recieving data from parent component
  constructor() {
    console.log('from child compnent :',this.product);
    
   }

  ngOnInit(): void {
  }

}
