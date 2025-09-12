import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
    private apiUrl ='https://randomuser.me/api/?results=50'
  constructor(private _http : HttpClient) { }

    getUser () : Observable<any>{
      return this._http.get(this.apiUrl)
    }
}
