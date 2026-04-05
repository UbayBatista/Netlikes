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

  formulario: FormGroup;
  mostrarPassword: boolean = false;


  constructor(private router: Router, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  togglePassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  login() {
    if (this.formulario.valid) {
      console.log('Datos:', this.formulario.value);
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  createAccount() {
    console.log('Redirigiendo a creación de cuenta');
    this.router.navigate(['/registro']);
  }

  forgotPassword() {
    console.log('Redirigiendo a recuperación de contraseña');
    // TODO: Implement navigation to forgot password page
  }
}