import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private studentsService: StudentsService, private router: Router) { }

  newName = ''
  newFirstName = ''
  newSex = ''
  newAge = 0
  newSpecialization = ''
  newYear = 0

  genders = ['Masculin', 'Feminin']
  years = [1,2,3,4]
  specializations = ['Calculatoare Engleza', 'Calculatoare Romana', 'Sisteme Multimedia', 'Informatica Aplicata', 'Robotica', 'Mecatronica']

  ngOnInit() {
  }

  selectSex(gender){
    this.newSex = gender
  }

  selectYear(year){
    this.newYear = year
  }

  selectSpecialization(specialization){
    this.newSpecialization = specialization
  }

  addStudent(newName, newFirstName, newSex, newAge, newSpecialization, newYear){
    this.studentsService.addStudent(newName, newFirstName, newSex, newAge, newSpecialization, newYear).subscribe(() => {
      this.router.navigate([''])
    })
  }

}
