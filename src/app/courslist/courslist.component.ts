import { Component, Input, OnInit } from '@angular/core';
import { courses } from '../models/courses';

@Component({
  selector: 'app-courslist',
  templateUrl: './courslist.component.html',
  styleUrls: ['./courslist.component.css']
})
export class CourslistComponent implements OnInit {
@Input () courseList! : courses
  constructor() { }

  ngOnInit(): void {
  }

}
