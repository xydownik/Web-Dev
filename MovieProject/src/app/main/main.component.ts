import {Component, inject, OnInit} from '@angular/core';
import {Movie, MovieInfo} from "../movie";
import {MovieService} from "../movie.service";
import {MovieItemComponent} from "../movie-item/movie-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {MovieDetailComponent} from "../movie-detail/movie-detail.component";
import {ActivatedRoute, RouterModule} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    MovieItemComponent,
    MovieDetailComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  movies: Movie[] = []
  static constMovies: Movie[] = []
  currentPage = 1
  itemsPerPage = 20
  constructor(private movieService: MovieService) {
    this.movies = []
  }
  ngOnInit() {
    this.loadMovies();
  }
  getConstMovies(){
    return MainComponent.constMovies
  }
  loadMovies() {
    this.movieService.getMoviesFromSecondApi(this.currentPage).subscribe((movies) => {
      MainComponent.constMovies = MainComponent.constMovies.concat(movies);
      this.movies = MainComponent.constMovies.slice(0, this.currentPage * this.itemsPerPage);
    });
  }

  loadMore() {
    this.currentPage++;
    this.loadMovies();
  }


  filterResults(text: string) {
    if (!text) {
      this.movies = MainComponent.constMovies

    }
    else{
      this.movies = MainComponent.constMovies.filter(movie =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
    }
  }


  protected readonly MovieService = MovieService;

  AddPage(page: number) {
    this.movieService.getMoviesFromSecondApi(page).subscribe(movies => {

      MainComponent.constMovies = MainComponent.constMovies.concat(movies)
      this.movies = MainComponent.constMovies
    });
  }
}
