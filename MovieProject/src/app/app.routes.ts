import { Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {MyMoviesComponent} from "./my-movies/my-movies.component";

export const routes: Routes = [
  {path: "movies", component: MainComponent, title: 'Movie Seeker | Main Page'},
  {path: "movies/:title", component: MovieDetailComponent, title: 'Movie Info'},
  {path: "my-movies", component: MyMoviesComponent, title: 'My Movies'},
  {path: "", redirectTo: "/movies", pathMatch: "full"}
];
