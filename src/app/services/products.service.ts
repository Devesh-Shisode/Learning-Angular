import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();
  constructor() { }
 
  increament(){
    this.counterSubject.next(this.counterSubject.value +1);
  }
  decreament() {
    if(this.counterSubject.value>0){
      this.counterSubject.next(this.counterSubject.value -1);
    }
  }
  reset(){
    this.counterSubject.next(0);
  }
}
