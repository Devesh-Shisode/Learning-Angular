import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { EmailValidator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateQuantity, removeFromCart, checkout } from '../store/cart/cart.actions';
import { selectCartItems, selectCartTotal, selectCartQuantity } from '../store/cart/cart.selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart : any[]=[
    {id : 1,name :'latop' ,price : 5000, description :'best laptop',rating: 3},
    {id : 2,name :'Air conditionar' ,price : 6000, description :'best AC',rating: 4},
    {id : 3,name :'tablet' ,price : 5000, description :'best tablet',rating: 2},
    {id : 4,name :'mobile' ,price : 3000, description :'poor mobiles',rating: 1},
  ]
  users : any[]=[{name : "devesh", email : 'devesh@gmail.com', role : 'Angular Developer'},
    {name : "Aavesh", email : 'Aavesh@gmail.com', role : 'React Developer'},
    {name : "chinu", email : 'chinu@gmail.com', role : 'VueJs Developer'},
    {name : "chetan", email : 'chetan@gmail.com', role : 'MBBS Developer'},
  ]
    products = [
    { id: 1, name: 'Mobile', price: 15000 },
    { id: 2, name: 'Laptop', price: 55000 },
    { id: 3, name: 'Headphones', price: 2000 }
  ];
  message : string = "";
  counter : number = NaN
  // constructor() { }
  ngOnInit(): void {}
     // This will removes a specific product from a cart
     onMessage(){
      this.message ='THTTTHH'
     }
  removeProduct(product: Product){
     this.cart = this.cart.filter((item) => {return item.id !== product.id})
  }
  raiseMessage(message : string){
    console.log(message);
     }
       onAddToCart(product: any) {
    this.cart.push(product);
  }
  items$ = this.store.select(selectCartItems);
  total$ = this.store.select(selectCartTotal).pipe(map(total=>total ?? 0  ))
  qty$ = this.store.select(selectCartQuantity);

  constructor(private store: Store) {}

  onQty(productId: string, value: string) {
    const qty = Number(value) || 0;
    this.store.dispatch(updateQuantity({ productId, qty }));
  }
  remove(productId: string) {
    this.store.dispatch(removeFromCart({ productId }));
  }
  checkout() {
    this.store.dispatch(checkout());
  }
}
