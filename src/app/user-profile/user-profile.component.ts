import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  posts : any []=[]
  userName : string ='Devesh'
  welcomeUSer : string ='Welcome to my profile page'
  ImageUrl : string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFx-gf4YCFgkwXdXcAVLAeVkrL1HO9BVFv8g&"

  isDisable : boolean =false;
   colour : string ='';
  isloggedIn : boolean =false;
  Description : string ='here is description we use both interpolation and property binding to show this line'
  constructor(private _service : MyServiceService) {
    _service.getPostData().subscribe((res)=>{
            console.log("Data getting using services and http client",res);
            this.posts =res
    })
   }

  ngOnInit(): void {
  }
    loggedIn(){
      this.isloggedIn=!this.isloggedIn
    }
  sayHello (){
    alert(`hello ${this.userName}`)
  }
    getColor(bool : boolean){
    return   {
    'background-color': bool ? 'green' : 'red',
    'color': 'white',
    'padding': '10px',
    'border': 6,
    'border-radius': '5px',
    'border-color' : 'blue'
  };
        }
   
        printFile(){
          this._service.printFile()
        }
   
 }

