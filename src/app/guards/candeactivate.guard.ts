import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddedittodoComponent } from '../addedittodo/addedittodo.component';

export interface CanComponnetDeactivate {

  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}
@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard  
{
  canDeactivate(component : CanComponnetDeactivate) :Observable<boolean> | Promise<boolean> | boolean {
    
      return component.canDeactivate ? component.canDeactivate() : true
  }
 
}
  

