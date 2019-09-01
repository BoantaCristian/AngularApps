import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  constructor() { }

  song = new Audio()
  playing: boolean = false
  playValue = 'Play'

  

  ngOnInit() {
  }

  playSong(){
    this.song.src = "../../../assets/S9.mp3"
    if(this.playing === false){
      this.song.play()
      this.playing = true
      this.playValue = 'Stop'
    }
    else if(this.playing === true){
      this.song.pause()
      this.playing = false
      this.playValue = 'Play'
    }
  }

  tiles = [
    {
      cols: 3, 
      rows: 1, 
      linkpoza: '../../../assets/w8.jpg',        
    },
    {
      cols: 1, 
      rows: 2, 
      linkpoza: '../../../assets/w5.jpg',        
    },
    {
      cols: 1, 
      rows: 1, 
      linkpoza: '../../../assets/w6.jpg'
    },
    {
      cols: 2, 
      rows: 1, 
      linkpoza: '../../../assets/w4.jpg',
    },
    {
      cols: 1, 
      rows: 2, 
      linkpoza: '../../../assets/w3.jpg',
    },
    {
      cols: 3, 
      rows: 2, 
      linkpoza: '../../../assets/w9.jpg',
    },
    {
      cols: 4, 
      rows: 3,
      linkpoza: '../../../assets/w1.jpg',
    },
    {
      cols: 2, 
      rows: 2, 
      linkpoza: '../../../assets/w10.jpg',
    },
    {
      cols: 2, 
      rows: 2, 
      linkpoza: '../../../assets/w11.jpg',
    }
  ]
}
