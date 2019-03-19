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
      value:'Samsung'
    },
    {
      value:'Iphone'
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
    //this.option = document.getElementById("Samsung").getAttribute('value')
    this.option = 'Samsung'
    console.log(this.option)
  }

  Chio(event){
    event.preventDefault()
    //this.option = document.getElementById("Iphone").getAttribute('value')
    this.option = 'Iphone'
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
