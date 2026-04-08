import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step4',
  standalone: true,
  imports: [],
  templateUrl: './step4.html',
  styleUrls: ['../steps.css', './step4.css']
})
export class Step4 {
  @Output() toEnd = new EventEmitter<any>();
  @Output() toPrev = new EventEmitter<void>();

  generos = [
    { name: 'Acción', selected: false },
    { name: 'Aventura', selected: false },
    { name: 'Animación', selected: false },
    { name: 'Comedia', selected: false },
    { name: 'Crimen', selected: false },
    { name: 'Documental', selected: false },
    { name: 'Drama', selected: false },
    { name: 'Familia', selected: false },
    { name: 'Fantasía', selected: false },
    { name: 'Historia', selected: false },
    { name: 'Terror', selected: false },
    { name: 'Musical', selected: false },
    { name: 'Misterio', selected: false },
    { name: 'Romance', selected: false },
    { name: 'Ciencia Ficción', selected: false },
    { name: 'Película de TV', selected: false },
    { name: 'Suspense', selected: false },
    { name: 'Bélica', selected: false },
    { name: 'Western', selected: false }
  ];

  get totalSelected(): number {
    return this.generos.filter(g => g.selected).length;
  }

  toggleGenero(index: number) {
    this.generos[index].selected = !this.generos[index].selected;
  }

  handleEnd() {
    const seleccion = this.generos.filter(g => g.selected).map(g => g.name);

    this.toEnd.emit(seleccion);
    
    console.log('Registro completado con los géneros:', seleccion);
  }
}