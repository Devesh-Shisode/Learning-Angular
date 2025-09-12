import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = '1'
  private isLoggedIn = false;
  constructor() { }

  login () : void{
       localStorage.setItem('sessionuser' ,this.user)
  }

  logout () : void{
       localStorage.removeItem('sessionuser')
  }

  isAuthenticated () : boolean {
     return !!localStorage.getItem('sessionuser') 
  }
}
