import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private _http : HttpClient) { }

  getUser() : Observable<any>{
    return this._http.get<any>('https://jsonplaceholder.typicode.com/users')
  }
}
