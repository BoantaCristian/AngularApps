import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-newplayer',
  templateUrl: './newplayer.component.html',
  styleUrls: ['./newplayer.component.css']
})
export class NewplayerComponent implements OnInit {

  constructor(private playerService: PlayerService, private router: Router) { }

  newName: String = ''
  
  ngOnInit() {
  }

  createPlayer(){
    const newPlayer = this.newName
    console.log(newPlayer)
    this.playerService.addPlayer(newPlayer).subscribe(()=> {
      this.router.navigate(['/'])
    })
  }
}
