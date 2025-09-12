import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  isLoggedIn :boolean=false //initiall user is not loged in

  constructor() { }

  ngOnInit(): void {
  }
//this method affect  user login and logout
  toggleLoginStatus (){
    console.log(this.isLoggedIn);
    
      this.isLoggedIn=!this.isLoggedIn
       console.log(this.isLoggedIn);
  }

}
