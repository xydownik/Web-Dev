import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {Movie, MovieInfo} from "../movie";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent implements OnInit{
  ngOnInit(): void {
    this.movieService.getMovieDetailsFromFirstApi(this.movie.title).subscribe(movieInfo =>
      this.movieInfo = movieInfo
    )
  }
  @Input() movie!: Movie;
   movieInfo!: MovieInfo;
  @Output() removeFromFavorites: EventEmitter<Movie> = new EventEmitter<Movie>();
  PHOTO_LINK = "https://image.tmdb.org/t/p/original"
  movieService: MovieService = inject(MovieService)


  toggleFavorite(movie: Movie): void {
    if (this.movieService.isInFavorites(movie)) {
      this.movieService.removeFromFavorites(movie);
      this.removeFromFavorites.emit(movie);
    } else {
      this.movieService.addToFavorites(movie);
    }
  }
}
