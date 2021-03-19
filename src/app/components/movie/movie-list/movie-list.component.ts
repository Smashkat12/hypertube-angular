import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/models/movie-list.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  inProgress = false;
  currentRate = 0
  movies$: Observable<Movies[]>;

  constructor(private movieService: MoviesService) {
    this.movies$ = this.movieService.getMovies()
  }

  ngOnInit() {
  
  }

  checkDatabase(id: number) {
    if(this.inProgress) return;

    
  }

}
