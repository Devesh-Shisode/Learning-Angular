import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
    user = {
      name : '',
      email: '',
      password : '',
      gender : ''
    }
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(form : any){
    
    if(form.valid){
      console.log(form.value);
    }
    
    
  }
}
