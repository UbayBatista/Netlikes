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
  @Input() notifications: { image: string; message: string }[] = [];

  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
