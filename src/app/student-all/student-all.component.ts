import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {

  students:Student[]=[];
  message:string='';
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
  
  deleteStudent(id:number)
  {
    console.log('data is'+id);
    this.service.deleteStudent(id).subscribe(
      (data)=>{
        this.message=data,
        this.getAllStudent()
      },
      (error)=>{console.log(error)}

    );
  }

}
