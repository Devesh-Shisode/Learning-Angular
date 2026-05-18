import { Component, EventEmitter, Input, OnInit, Output,SimpleChange,OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit,OnChanges {
  @Input() product!: any;
  @Output() remove = new EventEmitter<Product>(); // Creating an event to send the data to the parent compone component
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();
  @Input() message!: string;
 @Input() color! : string;
  @Output() notify = new EventEmitter<string>();
    @Input() name!: string;
  @Input() email!: string;
  @Input() role!: string;
   
  constructor() {}

  ngOnInit(): void {}
  onRemove() {
    this.remove.emit(this.product);  
  }
  onNotify() {
    this.notify.emit('hello child from child component');
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

   ngOnChanges(changes : SimpleChanges){
      console.log("changes",changes);
  }

 
}
