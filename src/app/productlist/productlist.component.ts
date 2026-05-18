import { Component, OnInit } from '@angular/core';
import { Itask } from '../models/task';
import { Product } from '../models/product';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToCart } from '../store/cart/cart.actions';
import { loadProducts } from '../store/products/products.actions';
import { selectAllProducts, selectProductsLoading } from '../store/products/products.selectors';
import { Products } from '../models/products.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  // selectedProducts: Product | null = null;
  // products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'laptop',
  //     price: 15000,
  //     description: 'high performance laptop',
  //     rating: 5,
  //   },
  //   {
  //     id: 2,
  //     name: 'headphones ',
  //     price: 4569,
  //     description: 'bass boosted headphones',
  //     rating: 4,
  //   },
  //   {
  //     id: 3,
  //     name: 'smart Watch',
  //     price: 7999,
  //     description: 'Water Proof Watch',
  //     rating: 3,
  //   },
  //   {
  //     id: 4,
  //     name: 'Samrt Phone ',
  //     price: 12999,
  //     description: 'Iphone',
  //     rating: 1,
  //   },
  // ];
  // // here we used Itask interface here for type safety
  // tasks: Itask[] = [
  //   { name: 'buy groceseries', isComplted: false },
  //   { name: 'Attend morning class', isComplted: true },
  //   { name: 'Clean the Car', isComplted: false },
  // ];
  // //orderstatus can be pending ,processing ,shipped or deleiverde
  // orderStatus: string = 'pending';
   //  ngOnInit(): void {}
  // changeStatus(newSatus: string) {
  //   this.orderStatus = newSatus;
  //   // alert(this.orderStatus)
  // }
  // //method to return style dynamically base don the rating
  // getRatingStyles(rating: number) {
  //   if (rating >= 4) {
  //     return { color: 'green', fontWight: 'bold' };
  //   } else if (rating == 3) {
  //     return { color: 'orange', fontWight: 'bold' };
  //   } else {
  //     return { color: 'red', fontWight: 'bold' };
  //   }
  // }
  // //used here Itask to do type safety
  // toggleTaskStatus(task: Itask) {
  //   task.isComplted = !task.isComplted;
  // }
  // selectProduct(product: Product) {
  //   this.selectedProducts = product;
  //   console.log('from parent component :', this.selectedProducts);
  // }
  math = Math
  products$!: Observable<Products[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store<Products>) {
console.log("store",this.store);
    
  }

  ngOnInit() {
    
    this.products$ = this.store.select(selectAllProducts);
    this.loading$ = this.store.select(selectProductsLoading);
    this.store.dispatch(loadProducts());
  }

  reload() { this.store.dispatch(loadProducts()); }
  add(productId: string) { this.store.dispatch(addToCart({ productId })); }
}
