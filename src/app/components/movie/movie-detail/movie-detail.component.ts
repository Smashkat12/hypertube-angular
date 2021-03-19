import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  /* id: number; */

  constructor(movieService: MoviesService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
  
   /*  this.id = this.route.snapshot.paramMap.get("id") */
  }

  
}
