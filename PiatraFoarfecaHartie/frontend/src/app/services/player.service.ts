import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url = 'http://localhost:4000' 

  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get(`${this.url}/players`)
  }

  getPlayersById(id){
    return this.http.get(`${this.url}/players/${id}`)
  }

  addPlayer(player){
    console.log("service: ", player)

    const score = 0
    const computerScore = 0
    

    return this.http.post(`${this.url}/players/add`, {player, score, computerScore})
    /*sau in caz ca da eroare daca trimiti obj si nu parametrii:
    return this.http.post(`${this.url}/players/add`, {
      name: name,
      score:0,
      computerScore: 0
    })*/
  }

  deletePlayer(id){
    return this.http.get(`${this.url}/players/delete/${id}`)
  }

  updatePlayer(id, player, score, computerScore){
    

    return this.http.post(`${this.url}/players/update/${id}`, {player, score, computerScore})
    /*sau in caz ca da eroare daca trimiti obj si nu parametrii:
    return this.http.post(`${this.url}/players/update/${id}`, {
      name: name,
      score:0,
      computerScore: 0
    })*/
  }
}
