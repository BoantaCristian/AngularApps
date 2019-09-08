import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = 'http://localhost:4000'
  
  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get(`${this.url}/people`)
  }

  getPerson(id){
    return this.http.get(`${this.url}/people/${id}`)
  }

  deletePerson(id){
    return this.http.get(`${this.url}/people/delete/${id}`)
  }

  addPerson(name, firstName, sex, age){
    return this.http.post(`${this.url}/people/add`, {name, firstName, sex, age})
  }

  updatePerson(id, name, firstName, sex, age){
    return this.http.post(`${this.url}/people/update/${id}`, {name, firstName, sex, age})
  }
}
