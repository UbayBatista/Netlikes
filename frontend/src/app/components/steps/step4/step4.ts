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
  @Output() toEnd = new EventEmitter<any>();
  @Output() toPrev = new EventEmitter<void>();

  generos = [
    { name: 'Acción', selected: false },
    { name: 'Comedia', selected: false },
    { name: 'Drama', selected: false },
    { name: 'Terror', selected: false },
    { name: 'Ciencia Ficción', selected: false },
    { name: 'Romance', selected: false },
    { name: 'Documental', selected: false },
    { name: 'Animación', selected: false }
  ];

  toggleGenero(index: number) {
    this.generos[index].selected = !this.generos[index].selected;
  }

  handleEnd() {
    const seleccion = this.generos.filter(g => g.selected).map(g => g.name);

    this.toEnd.emit(seleccion);
    
    console.log('Registro completado con los géneros:', seleccion);
  }
}