import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  
  constructor (private _authService : AuthService , private _router : Router){

  }
  
   canActivate () : boolean {
     if(this._authService.isAuthenticated()){
          return true;  
     }
        this._router.navigate(['/login']);
     return false
   }
  
}
