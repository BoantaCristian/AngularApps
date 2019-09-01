import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';
import { Song } from 'src/app/Models/song.model';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  
  songs :Song[] = [];

  constructor(private songService : SongsService) {}

  ngOnInit() {
    this.songService.getSongs().subscribe(
      data => {
        console.log("We have the response from database througs server",data)
        this.songs = data 
      }
    )
  }

  deleteSong(id) {
    this.songService.deleteSong(id).subscribe()
  }
}