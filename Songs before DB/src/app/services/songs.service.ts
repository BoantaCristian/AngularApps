import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

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
