import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MovieService} from "../movie.service";
import {Movie, MovieInfo} from "../movie";
import {Observable} from "rxjs";
import {MainComponent} from "../main/main.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  movie!: MovieInfo;
  loaded:boolean
  isFavorite: boolean

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {this.loaded = false
  this.isFavorite = false}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const title = params.get('title');
      if (title) {
        this.movieService.getMovieDetailsFromFirstApi(title).subscribe(movie => {
          this.movie = movie;
          this.loaded = true
        });
      }
    });
  }

}
