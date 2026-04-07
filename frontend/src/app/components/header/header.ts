import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NotificationPanel } from '../notification-panel/notification-panel';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NotificationPanel],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hasNotifications: boolean = true;
  showNotifications: boolean = false;
  avatarUrl: string = 'https://i.pravatar.cc/150?img=54';

  constructor(private router: Router) {}

  userName = "Cristiano Ronaldo"

  goToProfile() {
    console.log('Ir al perfil');
    this.router.navigate(['/profile', this.userName]);
  }

  boxOpen = false;

  openBox() {
    this.boxOpen = true;
  }
}