import { Component } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {
  constructor(private api:ApiService){
    api.fetchCourses().subscribe(
      (response) =>{
        this.courses=response;
      }
    )
  }

  courses:any = []

}