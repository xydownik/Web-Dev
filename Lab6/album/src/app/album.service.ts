import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, Photos} from "./models";
import {Observable, Subscription} from "rxjs";
import {AlbumsComponent} from "./albums/albums.component";

@Injectable({
  providedIn: 'root'
})
export class AlbumService implements OnInit{
    BASE_URl = "https://jsonplaceholder.typicode.com/albums";

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }
  getAlbums():Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.BASE_URl}`)
  }

  getAlbum(id:number){
      return this.httpClient.get<Album>(`${this.BASE_URl}/${id}`);
  }
  getPhotos(albumId: number){
      return this.httpClient.get<Photos[]>(`${this.BASE_URl}/${albumId}/photos`);
  }
  // updateAlbum(album: Album): Observable<Album> {
  //   return this.httpClient.put<Album>(`${this.BASE_URl}/${album.id}`, album);
  // }
  updateAlbum(album: Album) {
    AlbumsComponent.constAlbums[+album.id - 1] = album
  }


}
