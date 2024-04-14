import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Movie, MovieInfo} from "./movie";
import {MainComponent} from "./main/main.component";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  BASE_URl_1 = "https://www.omdbapi.com/?apikey=be6773f2&t=";
  BASE_URl_2 = "https://api.themoviedb.org/3/movie/popular?api_key=aed74963eb18fd81d8f674d352a697af&";
   favorites: Movie[] = [];
  constructor(private httpClient: HttpClient) {}

  getMoviesFromSecondApi(page: number): Observable<Movie[]> {
    return this.httpClient.get<any>(this.BASE_URl_2 + "page=" + page).pipe(
      map((response: any) => {
        return response.results.map((item: any) => new Movie(
          item.id,
          item.short_description,
          item.title,
          item.poster_path,
          item.overview,
          item.vote_average,
        ));
      })
    );
  }

  getMovieDetailsFromFirstApi(title: string): Observable<MovieInfo> {
    return this.httpClient.get<MovieInfo>(`${this.BASE_URl_1 + title}`).pipe(
      catchError(error => {
        console.error('Error fetching movie details:', error);
        throw 'Error fetching movie details';
      })
    );
  }

  AddRemoveFavorite(movie: Movie) {
    if(!this.favorites.some(m => m.id === movie.id)){
      movie.isFavorite = true
      this.favorites.push(movie)
    }
    else{
      movie.isFavorite = false
      this.favorites.filter((x:Movie) => x.id != movie.id)
    }
  }

  addToFavorites(movie: Movie): void {
    if (!this.isInFavorites(movie)) {
      this.favorites.push(movie);
    }
  }

  removeFromFavorites(movie: Movie): void {
    this.favorites = this.favorites.filter(m => m.id !== movie.id);
  }

  getFavorites(): Movie[] {
    return this.favorites;
  }

  isInFavorites(movie: Movie): boolean {
    return this.favorites.some(m => m.id === movie.id);
  }
}
