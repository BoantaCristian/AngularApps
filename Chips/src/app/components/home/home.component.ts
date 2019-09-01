import { Component, OnInit } from '@angular/core';
import {ChipsService} from '../../services/chips.service'
import {chipsModel} from '../../model/chips.model'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  option:string = 'All'
  
  companies = [
    {
      value:'All'
    },
    {
      value:'Lays'
    },
    {
      value:'Chio'
    }
  ]
  filteredOptions: Observable<string[]>;
  myControl:FormControl = new FormControl();
  options: string[] = [ 'cheese', 'chicken', 'chio', 'classic', 'lays', 'paprika', 'lays classic', 'lays cheese', 'chio paprika', 'chio chicken' ];

  name: string
  chipsModel: chipsModel
  chips = []
  bag = []
  total = 0
  constructor(private chipsService:ChipsService) { }
  
  ngOnInit() {
    this.chips = this.chipsService.getChips() 
    this.bag = this.chipsService.getBag() 

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  SearchRealTime(){} // SearchRealTime() = Search()
  Search(){
    if(this.name === ""){
      this.chips = this.chipsService.getChips()
    } else {
        this.chips = this.chips.filter(res => {
          return res.numeComplet.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
        })
      }
  }

  All(event){
    event.preventDefault()
    this.option = 'All'
    console.log(this.option)
  }

  Lays(event){
    event.preventDefault()
    this.option = document.getElementById("Lays").getAttribute('value')
    //this.option = 'Lays'
    console.log(this.option)
  }

  Chio(event){
    event.preventDefault()
    this.option = document.getElementById("Chio").getAttribute('value')
    //this.option = 'Chio'
    console.log(this.option)
  }

  addBag(chip){
    this.chipsService.addBag(chip)
    this.total = this.total + chip.price
  }

  deleteBag(b){
    this.chipsService.deleteBag(b)
    this.total = this.total - b.price
  }

  checkOut(){
    this.bag.splice(0, this.bag.length)
    this.total = 0
  }
}
