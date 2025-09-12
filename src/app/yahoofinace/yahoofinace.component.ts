import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-yahoofinace',
  templateUrl: './yahoofinace.component.html',
  styleUrls: ['./yahoofinace.component.css']
})
export class YahoofinaceComponent implements OnInit {
   

  constructor(private _rapidApi : RapidapiService) { }

  ngOnInit(): void {
    this._rapidApi.getWeather().subscribe((res)=>{
          console.log('Finace Data',res.data.main.stream
);
          
    })
  }

}
