import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './step1.html',
  styleUrls: ['../steps.css', './step1.css']
})
export class Step1 {
  @Output() alSiguiente = new EventEmitter<void>();

  notificarSiguiente() {
    this.alSiguiente.emit();
  }
}