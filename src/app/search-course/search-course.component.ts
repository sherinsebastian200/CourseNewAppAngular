import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {
  constructor(private api:ApiService){}
  coursetitle=""
  searchCourses:any = []


  readValue = ()=>{
    let data ={"coursetitle":this.coursetitle}
    console.log(data)
    this.api.searchCourses(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid course title")
          
        } else {
          this.searchCourses =response
          
        }
      }
    )
  }

}
