import {Component, OnInit} from '@angular/core';
import {Album, Photos} from "../models";
import {AlbumService} from "../album.service";
import {async} from "rxjs";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  static constAlbums: Album[] = []
  albums!: Album[];
  photos: Photos[];
  constructor(private albumService:AlbumService) {
    this.albums = []
    this.photos = []
  }
  ngOnInit(): void {
    this.getAlbums()
  }
  getAlbums(){
    if(AlbumsComponent.constAlbums.length) {
      this.albums = AlbumsComponent.constAlbums
      return
    }
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums
      if(!AlbumsComponent.constAlbums.length) {
        AlbumsComponent.constAlbums = this.albums
      }
    })
  }
  deleteAlbum(id:number){
    this.albumService.deleteAlbum(id)
      .subscribe(() => {
        // Remove the deleted album from the local array
        AlbumsComponent.constAlbums = this.albums.filter(album => album.id !== id);
      });
    this.getAlbums()
  }
}
