import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {

  students:Student[]=[];
  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.getAllStudent();
  }
  getAllStudent()
  {
    this.service.getAllStudent().subscribe(
      (data)=>{this.students=data},
      (error)=>{
        this.students=[];
        console.log(error);
      }
      );
  }

}
