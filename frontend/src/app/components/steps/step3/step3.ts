import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step3.html',
  styleUrls: ['../steps.css', './step3.css']
})
export class Step3 {
  @Output() alSiguiente = new EventEmitter<void>();
  @Output() alAtras = new EventEmitter<void>();

  terminosAceptados: boolean = false;

  notificarSiguiente() {
    if (this.terminosAceptados) {
      this.alSiguiente.emit();
    } else {
      alert('Debes aceptar los términos y condiciones para continuar.');
    }
  }

  notificarAtras() {
    this.alAtras.emit();
  }
}