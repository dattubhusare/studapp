import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
    
    this.service.deleteStudent(id).subscribe(
      (data)=>{
        this.message=data,
        this.getAllStudent()
      },
      (error)=>{console.log(error)}

    );
  }
  editStudent(id:number)
  {
    console.log("data "+id);
  }

}
