import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

    private yahooFinaceApiUrl = 'https://yahoo-finance166.p.rapidapi.com/api/news/list-by-symbol?s=AAPL%2CGOOGL%2CTSLA&region=US&snippetCount=500';

   private httpHeader = new HttpHeaders({
      'x-rapidapi-key' : 'c1df0627famsh87981cdb03d8f72p1b3edbjsnea076f5a55a1',
      'x-rapidapi-host' : 'yahoo-finance166.p.rapidapi.com'
    })
  constructor(private _http : HttpClient) { }

  getWeather () :  Observable<any>{
    return this._http.get(this.yahooFinaceApiUrl )
    //  return this._http.get(this.yahooFinaceApiUrl,{headers : this.httpHeader})
  }

}
