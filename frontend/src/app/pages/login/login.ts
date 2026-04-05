import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { BrandPanel } from "../../components/brand-panel/brand-panel";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass, BrandPanel],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

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
    } else {
      this.form.markAllAsTouched();
    }
  }

  createAccount() {
    console.log('Redirigiendo a creación de cuenta');
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    console.log('Redirigiendo a recuperación de contraseña');
    // TODO: Implement navigation to forgot password page
  }
}