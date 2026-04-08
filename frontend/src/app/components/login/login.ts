import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginForm {
  @Output() toNext = new EventEmitter<void>();

  form: FormGroup;
  showPassword: boolean = false;


  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.form.valid) {
      console.log('Datos:', this.form.value);
      this.router.navigate(['/home']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  createAccount() {
    this.toNext.emit();
  }

  forgotPassword() {
    console.log('Redirigiendo a recuperación de contraseña');
    // TODO: Implement navigation to forgot password page
  }
}
