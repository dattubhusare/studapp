import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student:Student[]=[];
  message:any='';
  constructor(private service:StudentService) { }

  ngOnInit(): void {
  }

  onSumbit(value)
  {
    console.log(value);
    let student=value;
    return  this.service.createStudent(student).subscribe(
      (data)=>{this.message=data},
      (error)=>{console.log(error)}
    );
    console.log(this.message);
  }
}
