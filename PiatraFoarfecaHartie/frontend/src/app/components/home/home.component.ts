import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service'
import { Player } from '../../Models/player.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  players: Player[] = []
  selectedPlayer: Player    //obj to store the current player
  selectedId
  playerSelected = false
  playPressed = true
  winner         // 0 : draw, 1 : player wins, 2 : computer wins 

  playerValue    //random value for player rock paper sccisors:  1-rock, 2-sccisors, 3-paper
  computerValue  //random value for computer rock paper sccisors

  rps = ['assets/r.png','assets/s.png','assets/p.png']

  ngOnInit() {
    this.getPlayers()
  }

  getPlayers(){
    this.playerService.getPlayers().subscribe((players: Player[]) => {
      console.log(players)
      this.players = players
    })
  }

  resetScore(id, player){
    this.playerService.updatePlayer(id, player, 0, 0).subscribe(() => {
      this.getPlayers()
    })
  }

  selectPlayer(player, id){
    this.selectedPlayer = player
    this.selectedId = id
    this.playerSelected = true
    this.playPressed = true
    this.winner = -1
    this.playerValue = -1
    this.computerValue = -1
  }

  play(id, player, score, computerScore){
    this.playerValue = Math.floor(Math.random() * 3 + 1)
    this.computerValue = Math.floor(Math.random() * 3 + 1)
    
    //this.playPressed = true;
    this.playPressed = false
    //setTimeout(() => this.playPressed = false, 0)

    if(this.playerValue === 1 && this.computerValue === 1){//draw
      this.winner = 0;
    }
    if(this.playerValue === 1 && this.computerValue === 2){//player wins
      this.winner = 1
      score++
      console.log(id, player, score, computerScore)
      this.playerService.updatePlayer(id, player, score, computerScore).subscribe(() => {
        this.getPlayers()
        console.log(this.players)
      })
    }
    if(this.playerValue === 1 && this.computerValue === 3){//computer wins
      this.winner = 2
      computerScore++
      console.log(id, player, score, computerScore)
      this.playerService.updatePlayer(id, player, score, computerScore).subscribe(() => {
        this.getPlayers()
        console.log(this.players)
      })
    }
     

    if(this.playerValue === 2 && this.computerValue === 1){//computer wins
      this.winner = 2
      computerScore++
      console.log(id, player, score, computerScore)
      this.playerService.updatePlayer(id, player, score, computerScore).subscribe(() => {
        this.getPlayers()
        console.log(this.players)
      })
    }
    if(this.playerValue === 2 && this.computerValue === 2){//draw
      this.winner = 0;
    }
    if(this.playerValue === 2 && this.computerValue === 3){//player wins
      this.winner = 1
      score++
      console.log(id, player, score, computerScore)
      this.playerService.updatePlayer(id, player, score, computerScore).subscribe(() => {
        this.getPlayers()
        console.log(this.players)
      })
    }

    if(this.playerValue === 3 && this.computerValue === 1){//player wins
      this.winner = 1
      score++
      console.log(id, player, score, computerScore)
      this.playerService.updatePlayer(id, player, score, computerScore).subscribe(() => {
        this.getPlayers()
        console.log(this.players)
      })
    }
    if(this.playerValue === 3 && this.computerValue === 2){//computer wins
      this.winner = 2
      computerScore++
      console.log(id, player, score, computerScore)
      this.playerService.updatePlayer(id, player, score, computerScore).subscribe(() => {
        this.getPlayers()
        this.selectedPlayer
      })
    }
    if(this.playerValue === 3 && this.computerValue === 3){//draw
      this.winner = 0;
    }
  }
}
