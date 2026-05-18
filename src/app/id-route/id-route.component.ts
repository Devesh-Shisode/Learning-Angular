import { Component, OnInit } from '@angular/core';

import { signal } from '@angular/core';

@Component({
  selector: 'app-id-route',
  templateUrl: './id-route.component.html',
  styleUrls: ['./id-route.component.css'],
})
export class IdRouteComponent implements OnInit {
  coursename = signal<string>('Angular');
  number = signal<number | string>('');
  line! : string
  citylist = signal<string[]>(['mumbai', 'pune', 'dilli']);
  statelist = signal<string[]>(['mh', 'pn', 'mp']);
  citychanged!: string;
  constructor() {}

  ngOnInit(): void {}
  changeCourseName() {
    this.coursename.set('React Js');
  }
  changeArray() {
    this.citylist.update((oldcity) => [...oldcity, this.citychanged]);
   for (let i = 1; i <= 6; i++) {
          this.line = '';
    for (let j = 0; j < i; j++) {
        this.line += '*';
       }
    console.log(this.line);
}

  }
}
