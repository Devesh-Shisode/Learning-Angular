import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  counter$ = this.counterSrv.counter$
  constructor(private counterSrv : ProductsService) { }
  
  ngOnInit(): void {
  }

}
