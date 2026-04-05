import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  goToProfile() {
    console.log('Ir al perfil');
  }

  boxOpen = false;

  openBox() {
    this.boxOpen = true;
  }
}