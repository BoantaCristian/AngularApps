import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';
import { Song } from 'src/app/Models/song.model';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  
  songs :Song[] = []

  constructor(private songService : SongsService) {}

  ngOnInit() {
    this.songs = this.songService.getSongs()
  }

  deleteSong(song: Song) {
    this.songService.deleteSong(song)
    console.log('component delete:',song)
  }
}