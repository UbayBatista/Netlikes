export interface GenreGroup {
  name: string;
  films: {
    title: string;
    image: string;
  }[];
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genre } from "../../components/genre/genre";
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../components/search-bar/search-bar';
import { Filmdto, FilmService } from '../../services/film.service';


@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [Genre, CommonModule, FormsModule, SearchBarComponent],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog implements OnInit {
  searchText = '';

  genres: GenreGroup[] = [];

  constructor(private filmService: FilmService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilmsByGenre().subscribe({
      next: (data) => {
        this.genres = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching films:', error);
      }
    });
  }

  filters(search: string) {
    this.searchText = search;
  }
  
  get filteredGenres() {
    const text = this.searchText.toLowerCase();
    console.log('Filtering genres with search text:', this.searchText);
    return this.genres
      .map(g => ({
        ...g,
        films: g.films.filter(f =>
          f.title.toLowerCase().includes(text)
        )
      }))
      .filter(g => g.films.length > 0);
  }
}
