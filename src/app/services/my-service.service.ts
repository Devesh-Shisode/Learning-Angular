import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
 
export class MyServiceService {
    apiUrl='https://jsonplaceholder.typicode.com/todos'
  constructor(private _http : HttpClient) { }

  printFile(){
    alert('servce using module level')
  }
    getPostData() : Observable<any>{
     return this._http.get( this.apiUrl)
    }
}
