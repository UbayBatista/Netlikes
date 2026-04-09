import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  standalone: true,
  imports: [],
  templateUrl: './message-bubble.html',
  styleUrl: './message-bubble.css'
})

export class MessageBubble {
  @Input() text: string = '';
  @Input() user: string = '';
  @Input() isMine: boolean = false;
  @Input() hour: string = '12:00';
}