import { Component, Output, EventEmitter, signal, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageBubble } from '../message-bubble/message-bubble';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [FormsModule, MessageBubble],
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css'
})
export class ChatWindow {
  @Output() return = new EventEmitter<void>();

  ForumTitle = 'Los juegos del hambre';
  newMessage = signal('');

  @Input() set selectedForumTitle(value: string) {
    this.ForumTitle = value;
  }

  messages = signal([
    { text: '¡Hola a todos! ¿Cuál es vuestra escena favorita?', isMine: false, user: 'User123' },
    { text: 'A mí me encanta cuando Katniss se ofrece como tributo en lugar de su hermana', isMine: true, user: 'Yo' },
    { text: 'Totalmente de acuerdo', isMine: false, user: 'Cinefilo99' },
    { text: 'Pues a mí me gusta la escena de las bayas', isMine: false, user: 'User123' },
    { text: 'Siii, gracias a esa se inicia la rebelión', isMine: false, user: 'Cinefilo99' },
    { text: 'A mí me gustaron las entrevistas a los tributos', isMine: false, user: 'User987' },
    { text: 'Ojalá hubieran añadido todas, así conoceríamos mejor a los participantes', isMine: true, user: 'Yo' }
  ]);

  AdjustHeight(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  sendMessage(textarea: HTMLTextAreaElement) {
    const text = this.newMessage().trim();
    if (text) {
      this.messages.update(prev => [...prev, {
        text: text,
        isMine: true,
        user: 'Yo',
        hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
    this.newMessage.set('');
    textarea.style.height = 'auto';
    console.log('Mensaje enviado correctamente');
  }

  goBack() {
    this.return.emit();
  }
}