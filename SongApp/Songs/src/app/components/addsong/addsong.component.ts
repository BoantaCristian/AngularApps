import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service'
import { Song } from 'src/app/Models/song.model';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})
export class AddsongComponent implements OnInit {
    
  constructor(private songsService: SongsService) { }

  ngOnInit() {
    
  }
  
  titleValue = ""
  authorValue = ""

  addSong() {
    const title = this.titleValue
    const author = this.authorValue

    console.log('component:',title, author)

    this.songsService.addSong(title, author).subscribe(
      data => {
        console.log("We heve the response from server AddSong",data)
      }
    )
  }
}
