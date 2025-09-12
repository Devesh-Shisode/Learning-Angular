import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
    imgUrl : string ='https://user-images.githubusercontent.com/50705472/195505501-dfc3d5d1-6078-4bee-9527-57c290796e99.png'
  constructor() { }

  ngOnInit(): void {
  }

}
