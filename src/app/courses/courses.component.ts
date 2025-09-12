import { Component, OnInit } from '@angular/core';
import { courses } from '../models/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
   selectedCourse : any =null
    courses : courses[]= [
      {name : 'Angular', price : 599, duration : '3 Months'},
      {name : 'javaScript', price : 399, duration : '1 Months'},
      {name : 'Full Stack', price : 899, duration : '5 Months'},
      {name : 'Web-development', price : 799, duration : '3 Months'},
]
  constructor() { }

  ngOnInit(): void {
  }
  selecteddCourse(course : any){
    this.selectedCourse = course
    console.log('From parent Component',this.selectedCourse);
    
  }

}
