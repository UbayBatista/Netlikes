import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials, User, RegisterData } from '../models/user.models';
import { Observable, BehaviorSubject } from 'rxjs';
export interface LoginResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser$ = new BehaviorSubject<User | null>(null);
  readonly dbUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient){}

  login(credentials: Credentials): Observable<User>{
    return this.http.post<User>(`${this.dbUrl}/login`, credentials);
  }
  
  register(data: RegisterData): Observable<User>{
    return this.http.post<User>('/api/auth/register', data);
  }

  logout(): void{
    localStorage.removeItem('token');
    this.currentUser$.next(null);
  }

  isAuthenticated(): boolean{
    return !!this.getToken();
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  setToken(token: string): void{
    localStorage.setItem('token', token);
  }

  getCurrentUser(): Observable<User | null>{
    return this.currentUser$.asObservable();
  }

}
