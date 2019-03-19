import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  
  songs = {}

  constructor(private songService : SongsService) {}

  ngOnInit() {
    this.songs = this.songService.getData()
  }

}