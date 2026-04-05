import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  @Input() image: string = '';
  @Input() message: string = '';
}
