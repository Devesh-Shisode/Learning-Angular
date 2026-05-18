import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
 
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http : HttpClient){}
  // mock data
 private apiUrl = 'https://fakestoreapi.com/products';

  // simulate HTTP call
  getAll(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl).pipe(delay(300));  
  }

  checkout(cartItems: { productId: string; qty: number }[]): Observable<{ success: boolean }> {
    console.log('server: checking out', cartItems);
    return of({ success: true }).pipe(delay(800));
  }
}
