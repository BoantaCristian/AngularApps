import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service'
import { People } from '../../Models/people'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: People[] = []
  peopleToFilter: People[] = []
  searchName: ''

  constructor(private personService: PersonService, ) { }

  ngOnInit() {
    this.getPeople()
  }

  getPeople(){
    this.personService.getPeople().subscribe((people: People[]) => {
      this.people = people
      this.peopleToFilter = people
    })
  }

  Search(){
    if(this.searchName == ""){
      this.ngOnInit()
    }
    else 
      this.peopleToFilter = this.peopleToFilter.filter( res => {
        return res.name.toLocaleLowerCase().match(this.searchName.toLocaleLowerCase())
      })
  }

}
