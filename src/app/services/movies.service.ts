import { Injectable } from '@angular/core';
import { Movies } from '../models/movie-list.model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private ROOT_URL = 'http://localhost:3004/results'

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get <Movies[]>(this.ROOT_URL)
  }
}
