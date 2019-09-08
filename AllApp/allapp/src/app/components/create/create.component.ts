import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  genders: String[] = ['Masculin', 'Feminin']
  sex: String 
  age: Number
  newName: String
  newFirstName: String

  bind = 0

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
  }

  selectGender(sex){
    this.sex = sex
  }

  createPerson(){
    this.personService.addPerson(this.newName, this.newFirstName, this.sex, this.age).subscribe(() =>{
      this.router.navigate([''])
    } )
  }
  
}
