import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service'
import { Students } from '../../models/student'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students: Students[] = []

  sorted = false
  sortedByName = false
  sortedByFirstName = false
  sortedBySex = false
  sortedByAge = false
  sortedBySpecialization = false
  sortedByYear = false

  searchName = ""

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents()
  }

  getStudents(){
    this.studentsService.getStudents().subscribe((students: Students[]) => {
      this.students = students
    })
  }

  search(){
    if(this.searchName === "")
      this.getStudents()
    else{
      this.students = this.students.filter(res => {
        return res.name.toLocaleLowerCase().match(this.searchName.toLocaleLowerCase())
      })
    }
  }

  noneSorted(){
    this.sortedByName = false
    this.sortedByFirstName = false
    this.sortedBySex = false
    this.sortedByAge = false
    this.sortedBySpecialization = false
    this.sortedByYear = false
  }

  sortName(){
    if(!this.sorted){
      this.students.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.noneSorted()
      this.sortedByName = true
      this.sorted = true
    }
    else{
      this.getStudents()
      this.sorted = false
    }
  }

  sortFirstName(){
    if(!this.sorted){
      this.students.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)
      this.noneSorted()
      this.sortedByFirstName = true
      this.sorted = true
    }
    else{
      this.getStudents()
      this.sorted = false
    }
  }

  sortSex(){
    if(!this.sorted){
      this.students.sort((a, b) => (a.sex > b.sex) ? 1 : -1)
      this.noneSorted()
      this.sortedBySex = true
      this.sorted = true
    }
    else{
      this.getStudents()
      this.sorted = false
    }

  }

  sortAge(){
    if(!this.sorted){
      this.students.sort((a, b) => (a.age > b.age) ? 1 : -1)
      this.noneSorted()
      this.sortedByAge = true
      this.sorted = true
    }
    else{
      this.getStudents()
      this.sorted = false
    }
    
  }
  sortSpecialization(){
    if(!this.sorted){
      this.students.sort((a, b) => (a.specialization > b.specialization) ? 1 : -1)
      this.noneSorted()
      this.sortedBySpecialization = true
      this.sorted = true
    }
    else{
      this.getStudents()
      this.sorted = false
    }
  }
  sortYear(){
    if(!this.sorted){
      this.students.sort((a, b) => (a.year > b.year) ? 1 : -1)
      this.noneSorted()
      this.sortedByYear = true
      this.sorted = true
    }
    else{
      this.getStudents()
      this.sorted = false
    }
  }

}
