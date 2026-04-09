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
  @Output() toNext = new EventEmitter<void>();
  @Output() toPrev = new EventEmitter<void>();

  termsAccepted: boolean = false;

  notifyNext() {
    if (this.termsAccepted) {
      this.toNext.emit();
    } else {
      alert('Debes aceptar los términos y condiciones para continuar.');
    }
  }

  notifyPrev() {
    this.toPrev.emit();
  }
}