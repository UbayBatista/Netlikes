import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step4.html',
  styleUrls: ['../steps.css', './step4.css']
})
export class Step4 {
  @Output() alFinalizar = new EventEmitter<any>();
  @Output() alAtras = new EventEmitter<void>();

  generos = [
    { nombre: 'Acción', seleccionado: false },
    { nombre: 'Comedia', seleccionado: false },
    { nombre: 'Drama', seleccionado: false },
    { nombre: 'Terror', seleccionado: false },
    { nombre: 'Ciencia Ficción', seleccionado: false },
    { nombre: 'Romance', seleccionado: false },
    { nombre: 'Documental', seleccionado: false },
    { nombre: 'Animación', seleccionado: false }
  ];

  toggleGenero(index: number) {
    this.generos[index].seleccionado = !this.generos[index].seleccionado;
  }

  finalizar() {
    const seleccion = this.generos.filter(g => g.seleccionado).map(g => g.nombre);
    
    this.alFinalizar.emit(seleccion);
    
    console.log('Registro completado con los géneros:', seleccion);
  }
}