import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserInteractionService {

    private http = inject(HttpClient);
    private authService = inject(AuthService);
    private readonly apiUrl = 'http://localhost:8080/marks';

    toggleMark(filmId: number, type: 'SEEN' | 'WATCHLATER'): Observable<any> {
        const email = this.authService.getCurrentUserEmail();
        if (!email) throw new Error('No hay email');

        return this.http.post(`${this.apiUrl}/${email}/toggle/${filmId}?type=${type}`, {});
    }

    getMarkStatus(filmId: number): Observable<any> {
        const email = this.authService.getCurrentUserEmail();
        if (!email) return of(null);
        return this.http.get(`${this.apiUrl}/${email}/status/${filmId}`);
    }
}