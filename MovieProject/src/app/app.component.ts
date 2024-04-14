import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {MovieItemComponent} from "./movie-item/movie-item.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {BrowserModule} from "@angular/platform-browser";
import {MyMoviesComponent} from "./my-movies/my-movies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
  RouterOutlet,
  MainComponent,
  MovieItemComponent,
  MovieDetailComponent,
  MyMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieProject';
}
