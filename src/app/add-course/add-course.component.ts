import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  coursetitle=""
  description=""
  duration=""
  date=""
  venue=""
  
constructor(private api:ApiService){}

readValues=()=>
{
let data :any = {"courseTitle":this.coursetitle,"courseDescription":this.description,"courseDuration":this.duration,"courseDate":this.date }
console.log(data)
this.api.addCourse(data).subscribe(
  (response :any)=>{
    console.log(response)
    if (response.status=="success") {
      alert("course added succesfully")
      this.coursetitle=""
      this.description=""
      this.duration=""
      this.date=""
      this.venue=""
    
      
    } else {
      alert("something went wrong")
      
    }
  
  }
)

}
}