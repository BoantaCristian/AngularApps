import { Component, OnInit } from '@angular/core';
import {ChipsService} from '../../services/chips.service'
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

  chips = []
  bag = []
  total = 0
  constructor(private chipsService:ChipsService) { }
  
  ngOnInit() {
    this.chips = this.chipsService.getChips() 
    this.bag = this.chipsService.getBag() 
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
