import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  standalone: true,
  imports: [],
  templateUrl: './message-bubble.html',
  styleUrl: './message-bubble.css'
})
export class MessageBubble {
  @Input() texto: string = '';
  @Input() usuario: string = '';
  @Input() esMio: boolean = false;
  @Input() hora: string = '12:00';
}