import { Component, OnInit } from '@angular/core';
import { TvShowRestService } from './services/tv-show.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = Array<any>();

  constructor() {}
  genres = [
    'Action',
    'Adventure',
    'Anime',
    'Comedy',
    'Crime',
    'Drama',
    'Espionage',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Legal',
    'Medical',
    'Music',
    'Mystery',
    'Romance',
    'Science-Fiction',
    'Sports',
    'Supernatural',
    'Thriller',
    'War',
    'Western',
  ];

  ngOnInit(): void {
    this.getTvShowGenres();
  }

  getTvShowGenres() {
    this.genres.forEach((genre: any) => {
      this.appPages.push({
        title: genre,
        url: `/genre/${genre.toLowerCase()}`,
        icon: 'film',
      });
    });
  }
}
