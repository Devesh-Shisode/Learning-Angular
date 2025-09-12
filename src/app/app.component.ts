import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DynamicRouteService } from './services/dynamic-route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   title = 'practice'
   constructor(public auth: AuthService, private router: Router, private dyn: DynamicRouteService) {}
  async ngOnInit() {
    await this.dyn.applyApiRoutes();
  }
    logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
   
}
