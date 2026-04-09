import { Component, Output, EventEmitter } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

function samePasswords(group: FormGroup) {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return password === confirm ? null : { notSamePasswords: true };
}

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, CommonModule],
  templateUrl: './step2.html',
  styleUrl: '../steps.css'
})

export class Step2 {
  @Output() toNext = new EventEmitter<void>();
  @Output() toPrev = new EventEmitter<void>();

  questions = [
    '¿Cuál es el nombre de tu primera mascota?',
    '¿En qué país naciste?',
    '¿Cuál es el nombre de tu madre?',
    '¿Cómo se llamaba tu escuela primaria?'
  ];

  form: FormGroup;
  showPassword: boolean = false;
  showConfirmation: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      question: ['', Validators.required],
      answer: ['', Validators.required]
    }, { validators: samePasswords });
  }

  togglePassword() { this.showPassword = !this.showPassword; }
  toggleConfirm() { this.showConfirmation = !this.showConfirmation; }

  notifyNext() {
    if (this.form.valid) {
      this.toNext.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }

  notifyPrev() {
    this.toPrev.emit();
  }
}