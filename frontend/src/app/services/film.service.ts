export interface Filmdto {
  id: number;
  title: string;
  summary: string;
  filmUrl: string;
  genres: string[];
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  readonly dbUrl = 'http://localhost:8080/films';

  constructor(private http: HttpClient) {}
  
  getFilms(): Observable<Filmdto[]> {
    return this.http.get<Filmdto[]>(this.dbUrl)
    .pipe(catchError(this.handleError));
  }

  getFilmsByGenre(): Observable<any[]> {
  return this.http.get<Filmdto[]>(this.dbUrl).pipe(
    map(films => this.mappingByGenre(films)),
    catchError(this.handleError)
  );
}

  getFilmById(id: number): Observable<Filmdto> {
    return this.http.get<Filmdto>(`${this.dbUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  private mappingByGenre(films: Filmdto[]): any[] {
    const genreMap: { [key: string]: any[] } = {};

    films.forEach(film => {

      film.genres.forEach(genre => {
        if (!genreMap[genre]) {
          genreMap[genre] = [];
        }

        genreMap[genre].push({
          title: film.title,
          image: film.filmUrl
        });
      });

    });

    return Object.keys(genreMap).map(name => ({
      name,
      films: genreMap[name]
    }));
  }
}

