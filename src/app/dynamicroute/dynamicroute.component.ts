import { Component, OnInit } from '@angular/core';
import { ApiMenuItem, MenuService } from '../services/menu.service';

@Component({
  selector: 'app-dynamicroute',
  templateUrl: './dynamicroute.component.html',
  styleUrls: ['./dynamicroute.component.css']
})
export class DynamicrouteComponent implements OnInit {

       

     menu: ApiMenuItem[] = [];
  constructor(private menuService: MenuService) {}
  ngOnInit() {
    this.menuService.getMenu().subscribe(res => this.menu = res);
    console.log("Logging the menu",this.menu);
    
  }

}
