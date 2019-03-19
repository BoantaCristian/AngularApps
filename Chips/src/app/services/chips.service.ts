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
        name: 'Lays',
        sortiment: 'Classic',
        description: 'A classic flavour made with diligence by lays',
        price: 3,
        gramaj: '300',
        linkpoza: '../../../assets/LaysClassic.jpg',
        logo: '../../../assets/lays.png',
        bag: false
      },
      {
        name: 'Lays',
        sortiment: 'Cheese',
        description: 'Cheese flavoured chips made with diligence by lays',
        price: 3,
        gramaj: '300',
        linkpoza: '../../../assets/LaysCheese.jpg',
        logo: '../../../assets/lays.png',
        bag: false
      },
      {
        name: 'Chio',
        sortiment: 'Paprika',
        description: 'A paprika taste for you, taste with confidence, chio!',
        price: 4,
        gramaj: '240',
        linkpoza: '../../../assets/ChioPaprika.jpg',
        logo: '../../../assets/chio.jpg',
        bag: false
      },
      {
        name: 'Chio',
        sortiment: 'Chicken',
        description: 'Chicken have never been so happy to be turned in this chips, chio!',
        price: 4,
        gramaj: '240',
        linkpoza: '../../../assets/ChioChicken.jpg',
        logo: '../../../assets/chio.jpg',
        bag: false
      }
    ]
  }
}
