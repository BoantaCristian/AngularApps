import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000'

  getStudents(){
    return this.http.get(`${this.url}/students`)
  }

  getStudent(id){
    return this.http.get(`${this.url}/students/${id}`)
  }

  addStudent(name, firstName, sex, age, specialization, year){
    return this.http.post(`${this.url}/students/add`, {name, firstName, sex, age, specialization, year})
  }

  updateStudent(id, name, firstName, sex, age, specialization, year){
    return this.http.post(`${this.url}/students/update/${id}`,{name, firstName, sex, age, specialization, year})
  }

  deleteStudent(id){
    return this.http.get(`${this.url}/students/delete/${id}`)
  }

}
