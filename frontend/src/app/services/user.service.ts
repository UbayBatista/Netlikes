import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, of } from 'rxjs';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly dbUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}
  
  getUsers(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.dbUrl}?mail=${email}`)
    .pipe(catchError(this.handleError));
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.dbUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  searchBy(query: string | null): Observable<any[]> {
    if (!query || query.trim() === '') {
      return of([]);
    }
    return this.http.get<any[]>(`${this.dbUrl}/search?query=${query}`).pipe(
      catchError(error => {
        console.error('Error en la búsqueda', error);
        return of([]);
      })
    );
  }

  private handleError(error: any): Observable<never> {
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}

