import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hasNotifications: boolean = true;
  showNotifications: boolean = false;
  avatarUrl: string = 'https://i.pravatar.cc/150?img=54';

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  goToProfile() {
    console.log('Ir al perfil');
  }
}