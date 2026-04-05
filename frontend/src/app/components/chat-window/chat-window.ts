import { Component, Output, EventEmitter, signal } from '@angular/core';
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
  @Output() volver = new EventEmitter<void>();

  tituloForo: string = 'Los juegos del hambre';
  nuevoMensaje = signal('');

  mensajes = signal([
    { texto: '¡Hola a todos! ¿Cuál es vuestra escena favorita?', esMio: false, usuario: 'User123' },
    { texto: 'A mi me encanta cuando Katniss se ofrece como tributo en lugar de su hermana', esMio: true, usuario: 'Yo' },
    { texto: 'Totalmente de acuerdo', esMio: false, usuario: 'Cinefilo99' },
    { texto: 'Pues a mi me gusta la escena de las bayas', esMio: false, usuario: 'User123' },
    { texto: 'Siii, gracias a esa se inicia la revelión', esMio: false, usuario: 'Cinefilo99' },
    { texto: 'A mi me gustó las entrevistas a los tributos', esMio: false, usuario: 'User987' },
    { texto: 'Ojalá hubieran añadido todas, así conoceríamos mejor a los participantes', esMio: true, usuario: 'Yo' }
  ]);

  ajustarAltura(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  enviarMensaje(textarea: HTMLTextAreaElement) {
    const texto = this.nuevoMensaje().trim();
    if (texto) {
      this.mensajes.update(prev => [...prev, {
        texto: texto,
        esMio: true,
        usuario: 'Yo',
        hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
    this.nuevoMensaje.set('');
    textarea.style.height = 'auto';
    console.log('Mensaje enviado correctamente');
  }

  irAtras() {
    this.volver.emit();
  }
}