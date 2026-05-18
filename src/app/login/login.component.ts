import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth :AuthService , private _router : Router) { }
  isloggedIn =false
  ngOnInit(): void {
  }
    login(){
      this._auth.login()
      this._router.navigate(['/todo'])
    }
        logout() {
    this._auth.logout(); 
    this._router.navigate(['/login']); 
  }

      isLoggedIn(): boolean {
         
    return this._auth.isAuthenticated();
  }
}
