import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgbModule
  ]
})
export class MovieModule { }
