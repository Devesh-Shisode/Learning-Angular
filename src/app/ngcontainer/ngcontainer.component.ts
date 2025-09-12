import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.css']
})
export class NgcontainerComponent implements OnInit {

    userlisrt : any[]=[]
    isApi : boolean = false
  constructor(private _http : HttpClient) { }

  ngOnInit(): void {
     
  }
    getData(){
      this.isApi = true
      this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((data : any)=>{
          console.log(data);
          this.userlisrt = data
          this.isApi = false
      })
    }
   
}
