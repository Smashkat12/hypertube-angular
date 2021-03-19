import { Injectable } from '@angular/core';
import { Movies } from '../models/movie-list.model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Movie } from '../models/movie.model';




@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private ROOT_URL = 'http://localhost:3004/results';

  private URL = 'http://localhost:5000/movies/yts/'

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get <Movies[]>(this.ROOT_URL)
  }

  getMovie(id: number){
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`)
  }
}
