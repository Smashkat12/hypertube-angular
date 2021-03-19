import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgbModule
  ]
})
export class MovieModule { }
