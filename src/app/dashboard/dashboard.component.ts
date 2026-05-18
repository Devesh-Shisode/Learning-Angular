import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter/counter.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counter$ =this.CounterSrv.counter$
  counter$$ = this.store.select('counter')
  constructor(private CounterSrv : ProductsService , private store : Store<{counter : number}>) {
    console.log("store------>",store);
    
   }
  ngOnInit(): void {
  }
    increment(){
      this.CounterSrv.increament()
    }
    decrement(){
      this.CounterSrv.decreament();
    }
    reset(){
      this.CounterSrv.reset()
    }

    increment1(){
       this.store.dispatch(increment())
    }
    decrement2(){
      
      this.store.dispatch(decrement())
    }
    reset3(){
       this.store.dispatch(reset())
    }
}
