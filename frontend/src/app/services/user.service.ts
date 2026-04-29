import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyProfile, UserProfile } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly dbUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getMyProfile(email: string): Observable<MyProfile> {
    return this.http.get<MyProfile>(`${this.dbUrl}/myProfile/${email}`);
  }

  getUserProfile(userName: string, requesterEmail: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.dbUrl}/profile/${userName}`, { params: { requesterEmail } });
  }

  updatePrivacy(email: string, isPrivate: boolean): Observable<void> {
    return this.http.patch<void>(`${this.dbUrl}/myProfile/${email}/privacy`, { isPrivate });
  }
}
