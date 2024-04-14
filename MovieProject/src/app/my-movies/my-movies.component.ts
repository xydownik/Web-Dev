import {Component, OnInit} from '@angular/core';
import {Movie} from "../movie";
import {MovieService} from "../movie.service";
import {NgForOf, NgIf} from "@angular/common";
import {MainComponent} from "../main/main.component";
import {MovieItemComponent} from "../movie-item/movie-item.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-my-movies',
  standalone: true,
  imports: [
    NgForOf,
    MovieItemComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './my-movies.component.html',
  styleUrl: './my-movies.component.css'
})
export class MyMoviesComponent implements OnInit{
  myMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}


  ngOnInit() {
    this.myMovies = this.movieService.getFavorites();
  }

  removeFromFavorites(movie: Movie): void {
  this.movieService.removeFromFavorites(movie);
  this.myMovies = this.movieService.getFavorites();
  }

}
