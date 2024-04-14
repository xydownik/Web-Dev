export class Movie{
  id:number
  shortDescription: string
  title: string
  posterPath:string
  overview: string
  voteAverage:string
  isFavorite: boolean = false

  constructor(id:number, shortD: string, title: string, posterPath: string,overview:string, voteAverage: string) {
    this.id=id
    this.shortDescription = shortD
    this.title = title
    this.posterPath=posterPath
    this.overview = overview
    this.voteAverage = voteAverage

  }
}

export class MovieInfo{
  Title:string
  Genre:string
  Runtime:string
  Director:string
  Actors:string
  Ratings: Dictionary[]
  Poster:string
  Year:string
  Writer: string
  Plot: string

  constructor(Title:string, Genre: string, runtime: string, director:string,
              actors: string, ratings: Dictionary[], poster:string, year:string,
              writer:string, plot:string) {
    this.Title = Title
    this.Genre = Genre
    this.Runtime = runtime
    this.Director = director
    this.Actors = actors
    this.Ratings = ratings
    this.Poster=poster
    this.Year=year
    this.Writer = writer
    this.Plot = plot

  }
}
interface Dictionary{
  Source: string,
  Value: string
}

