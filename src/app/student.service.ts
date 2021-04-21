import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private baseUrl : string='http://localhost:8080/student';

  constructor(private http:HttpClient) { }
  getAllStudent():Observable<Student[]>
  {
    return this.http.get<Student[]>(`${this.baseUrl}/all`);
  }
  deleteStudent(id:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{responseType:'text'});
  }
  createStudent(student:Student):Observable<Student>
  {
    return this.http.post<Student>(`${this.baseUrl}/create`,student);
  }
 
}
