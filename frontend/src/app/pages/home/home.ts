import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Genre } from '../../components/genre/genre';
import { FilmService } from '../../services/film.service';
import { Film } from '../../components/film/film';
import { FilmListItem, GenreGroup } from '../../models/film.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [Genre, Film]
})
export class Home implements OnInit {
  tabActive: string = 'paraTi';

  forYouFilms: GenreGroup[] = [];
  users_films: FilmListItem[] = [];
  
  constructor(private filmService: FilmService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms().subscribe({
      next: (data) => {
        this.users_films = data.slice(0,10);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching films:', error);
      }
    });
    this.filmService.getFilmsByGenre().subscribe({
      next: (data) => {
        this.forYouFilms = data.slice(9,30);
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
