import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChipsService {

  constructor() { }
  chip = []
  bag = []

  addBag(chip){
    this.bag.push(chip)
  }

  deleteBag(b){
    this.bag.splice(this.bag.indexOf(b), 1)
  }

  getBag(){
    return this.bag
  }

  getChips(){
    return this.chip = [
      {
        name: 'Samsung',
        sortiment: 'Galaxy S9',
        description: 'Our new innovative tachnology',
        price: 2700,
        rank: 'performant',
        linkpoza: '../../../assets/S9.png',
        logo: '../../../assets/lays.png',
        bag: false
      },
      {
        name: 'Samsung',
        sortiment: 'Galaxy S10 plus',
        description: 'A new laser cut infinity Oled display',
        price: 4700,
        rank: 'very performant',
        linkpoza: '../../../assets/S10plus.jpg',
        logo: '../../../assets/lays.png',
        bag: false
      },
      {
        name: 'Iphone',
        sortiment: 'X',
        description: 'Check out the new Iphone X and the new face recognition system',
        price: 3800,
        rank: 'performant',
        linkpoza: '../../../assets/Iphonex.jpg',
        logo: '../../../assets/chio.jpg',
        bag: false
      },
      {
        name: 'Iphone',
        sortiment: 'XS Max',
        description: 'The new upgraded version of Iphone X, faster, smoother!',
        price: 4500,
        rank: 'very performant',
        linkpoza: '../../../assets/IphoneXSMax.jpg',
        logo: '../../../assets/chio.jpg',
        bag: false
      }
    ]
  }
}
