import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service'
import { Player } from '../../Models/player.model'

@Component({
  selector: 'app-manageplayers',
  templateUrl: './manageplayers.component.html',
  styleUrls: ['./manageplayers.component.css']
})
export class ManageplayersComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  editId = 0
  players: Player[] = []

  editedPlayer = ''
  editedScore = ''
  editedComputerScore = ''

  ngOnInit() {
    this.getPlayers()
  }

  getPlayers(){
    this.playerService.getPlayers().subscribe((players: Player[]) => {
      this.players = players
    })
  }

  updatePlayer(){
    this.playerService.updatePlayer(this.editId, this.editedPlayer, this.editedScore, this.editedComputerScore).subscribe(() => {
      this.getPlayers()
      this.editId = 0
    })
  }

  resetScore(id, player){
    this.playerService.updatePlayer(id, player, 0, 0).subscribe(() => {
      this.getPlayers()
    })
  }

  deletePlayer(id){
    console.log(id)
    this.playerService.deletePlayer(id).subscribe(() => {
      this.getPlayers()
    })
  }

  editMode(id, name, score, computerScore){
    this.editId = id
    this.editedPlayer = name
    this.editedScore = score
    this.editedComputerScore = computerScore
  }

  cancel(){
    this.editId = 0
  }
}
