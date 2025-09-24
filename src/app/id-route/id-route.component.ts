import { Component, OnInit } from '@angular/core';
import { RouteService } from '../services/route.service';
 

@Component({
  selector: 'app-id-route',
  templateUrl: './id-route.component.html',
  styleUrls: ['./id-route.component.css']
})
export class IdRouteComponent implements OnInit {

    users : any [] =[];

  constructor(private idroute : RouteService ) { }

  ngOnInit(): void {
    this.idroute
  }

}
