import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step2.html',
  styleUrl: '../steps.css'
})
export class Step2 {
  @Output() alSiguiente = new EventEmitter<void>();
  @Output() alAtras = new EventEmitter<void>();

  preguntas = [
    '¿Cuál es el nombre de tu primera mascota?',
    '¿En qué país naciste?',
    '¿Cómo se llamaba tu escuela primaria?'
  ];

  notificarSiguiente() {
    this.alSiguiente.emit();
  }

  notificarAtras() {
    this.alAtras.emit();
  }
}