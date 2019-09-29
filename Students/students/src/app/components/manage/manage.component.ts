import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service'
import { Students } from '../../models/student'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  students: Students[] = []

  genders = ['Masculin', 'Feminin']
  years = [1,2,3,4]
  specializations = ['Calculatoare Engleza', 'Calculatoare Romana', 'Sisteme Multimedia', 'Informatica Aplicata', 'Robotica', 'Mecatronica']

  editId = -1
  name = ''
  firstName = ''
  sex = ''
  age = 0
  specialization = ''
  year = 0

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents()
  }

  getStudents(){
    this.studentsService.getStudents().subscribe((students: Students[]) => {
      this.students = students
    })
  }

  selectGender(gender){
    this.sex = gender
  }

  selectSpecialization(specialization){
    this.specialization = specialization
  }

  selectYear(year){
    this.year = year
  }

  editStudent(id, name, firstName, sex, age, specialization, year){
    this.editId = id
    this.name = name
    this.firstName = firstName
    this.sex = sex
    this.age = age
    this.specialization = specialization 
    this.year = year
  }

  cancelEdit(){
    this.editId = -1
  }

  updateStudent(){
    this.studentsService.updateStudent(this.editId, this.name, this.firstName, this.sex, this.age, this.specialization, this.year).subscribe(()=>{
      this.getStudents()
      this.editId = 0
    })
  }

  deleteStudent(id){
    this.studentsService.deleteStudent(id).subscribe(()=>{
      this.getStudents()
    })
  }
}
