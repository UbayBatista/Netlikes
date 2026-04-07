import { Component, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

function validateAge(group: FormGroup) {
  const day = group.get('day')?.value;
  const month = group.get('month')?.value;
  const year = group.get('year')?.value;

  if (!day || !month || !year) return null;

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const gotBirthday = today >= new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  const realAge = gotBirthday ? age : age - 1;

  return realAge >= 16 ? null : { validateAge: true };
}

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './step1.html',
  styleUrls: ['../steps.css', './step1.css']
})
export class Step1 {
  @Output() toNext = new EventEmitter<void>();

  form: FormGroup;

  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    { value: 1, name: 'Enero' }, { value: 2, name: 'Febrero' },
    { value: 3, name: 'Marzo' }, { value: 4, name: 'Abril' },
    { value: 5, name: 'Mayo' }, { value: 6, name: 'Junio' },
    { value: 7, name: 'Julio' }, { value: 8, name: 'Agosto' },
    { value: 9, name: 'Septiembre' }, { value: 10, name: 'Octubre' },
    { value: 11, name: 'Noviembre' }, { value: 12, name: 'Diciembre' }
  ];
  years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  constructor(private router: Router, private fb: FormBuilder) {
  this.form = this.fb.group({
    user_name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    day: ['', Validators.required],
    month: ['', Validators.required],
    year: ['', Validators.required]
  }, { validators: validateAge });
}

  notifyNext() {
    if (this.form.valid) {
      console.log('Datos del paso 1:', this.form.value);
      this.toNext.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }

  goBackToLogin() {
    console.log('Redirigiendo a inicio de sesión');
    this.router.navigate(['/login']);
  }
}