import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full' 
  },
  { 
    path: 'movies',
    /* 
    * Differential loading,
    ? Angular 8 feature 
    ? Lazy loads movie module
     */
    loadChildren: () => import('./components/movie/movie.module').then((m) => m.MovieModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
