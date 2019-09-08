import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service'
import { People } from '../../Models/people'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  people: People[] = []

  updateId = 0
  updateName: String
  updateFirstName: String
  updateSex: String
  updateAge: Number

  genders = ['Masculin', 'Feminin']

  constructor(private personService: PersonService, ) { }

  ngOnInit() {
    this.getPeople()
  }

  getPeople(){
    this.personService.getPeople().subscribe((people: People[]) => {
      this.people = people
    })
  }

  selectGender(gender){
    this.updateSex = gender
  }

  editMode(id, name, firstName, sex, age){
    this.updateId = 0
    this.updateId = id
    this.updateName = name
    this.updateFirstName = firstName
    this.updateSex = sex
    this.updateAge = age
  }

  cancelEdit(){
    this.updateId = 0
  }

  editPerson(){
    this.personService.updatePerson(this.updateId, this.updateName, this.updateFirstName, this.updateSex, this.updateAge).subscribe(()=>{
      this.getPeople()
      this.updateId = 0
    })
  }

  deletePerson(id){
    this.personService.deletePerson(id).subscribe(()=>{
      this.getPeople()
    })
  }

}
