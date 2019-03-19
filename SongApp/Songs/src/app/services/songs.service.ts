import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Song } from '../Models/song.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  
  public url: string = 'http://localhost:1234'
  private songs: Song[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  getSongs() {
    return this.songs
  }

  addSong(title :string, author: string):Observable<Song> {
    const song: Song = {title: title, author: author}
    //UI
    this.songs.push(song)
    console.log('service:', title, author)
    
    this.router.navigate([''])
    //Server
    return this.http.post<Song>(`${this.url}/songs`,{song})
  }

  deleteSong(song: Song): Observable<Song>{
    this.songs.splice(this.songs.indexOf(song), 1)
    console.log('service delete:', song)
    return this.http.delete<Song> (`${this.url}/title`)
  }

  getData() {
    return [
      {
          title: 'jos cu',
          author: 'dragnea'
      },
     {
        title: 'si cu',
        author: 'dancila'
     }
    ]
  }
}
