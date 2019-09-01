import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Song } from '../Models/song.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  
  public url: string = 'http://localhost:1234'

  constructor(private http: HttpClient, private router: Router) { }

  getSongs():Observable<Song[]> {
    return this.http.get<Song[]>(`${this.url}/songs`)
  }

  addSong(title :string, author: string):Observable<Song[]> {
    // executa navigare dupa http.get cu 100ms
    setTimeout(() => {
      this.router.navigate(['']),
      100
    })
    return this.http.post<Song[]>(`${this.url}/addsong`,{title, author})
  }

  deleteSong(id): Observable<Song>{
    //refresh
    window.location.reload()
    return this.http.get<Song> (`${this.url}/deletesong/${id}`)
  }
}
