export interface GenreGroup {
  name: string;
  films: {
    title: string;
    image: string;
  }[];
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Genre } from '../../components/genre/genre';
import { Filmdto, FilmService } from '../../services/film.service';
import { Film } from '../../components/film/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [Genre, Film]
})
export class Home implements OnInit {
  tabActive: string = 'paraTi';

  forYouFilms: GenreGroup[] = [];
  users_films: Filmdto[] = [];
  
  constructor(private filmService: FilmService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms().subscribe({
      next: (data) => {
        this.users_films = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching films:', error);
      }
    });
    this.filmService.getFilmsByGenre().subscribe({
      next: (data) => {
        this.forYouFilms = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching films by genre:', error);
      }
    });
  }

  switchTab(tab: string) {
    this.tabActive = tab;
  }
}
