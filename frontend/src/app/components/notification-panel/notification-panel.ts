import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Notification } from '../notification/notification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-panel',
  imports: [Notification, CommonModule],
  templateUrl: './notification-panel.html',
  styleUrl: './notification-panel.css',
})
export class NotificationPanel {
  @Input() isOpen: boolean = false;
  notifications = [
    { imagen: 'assets/notificacion1.png', mensaje: 'Tienes una nueva solicitud de amistad.' },
    { imagen: 'assets/notificacion2.png', mensaje: 'Tu publicación ha recibido un nuevo comentario.' },
    { imagen: 'assets/notificacion3.png', mensaje: 'Has sido etiquetado en una foto.' },
    { imagen: 'assets/notificacion4.png', mensaje: 'Tu amigo ha publicado una nueva foto.' },
    { imagen: 'assets/notificacion5.png', mensaje: 'Recibiste un nuevo mensaje privado.' },
    { imagen: 'assets/notificacion6.png', mensaje: 'Tu evento próximo está por comenzar.' },
    { imagen: 'assets/notificacion1.png', mensaje: 'Tienes una nueva solicitud de amistad.' },
    { imagen: 'assets/notificacion2.png', mensaje: 'Tu publicación ha recibido un nuevo comentario.' },
    { imagen: 'assets/notificacion3.png', mensaje: 'Has sido etiquetado en una foto.' },
    { imagen: 'assets/notificacion4.png', mensaje: 'Tu amigo ha publicado una nueva foto.' },
    { imagen: 'assets/notificacion5.png', mensaje: 'Recibiste un nuevo mensaje privado.' },
    { imagen: 'assets/notificacion6.png', mensaje: 'Tu evento próximo está por comenzar.' },
  ]

  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
