import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  tabActive: string = 'paraTi';

  peliculasParaTi = [
    {
      categoria: 'Acción',
      items: [
        { id: 1, titulo: 'Mad Max', ano: 2015, imagen: 'https://via.placeholder.com/140x200' },
        { id: 2, titulo: 'John Wick', ano: 2014, imagen: 'https://via.placeholder.com/140x200' },
        { id: 3, titulo: 'Top Gun', ano: 2022, imagen: 'https://via.placeholder.com/140x200' },
        { id: 4, titulo: 'Mission Impossible', ano: 2023, imagen: 'https://via.placeholder.com/140x200' },
      ]
    },
    {
      categoria: 'Drama',
      items: [
        { id: 5, titulo: 'Oppenheimer', ano: 2023, imagen: 'https://via.placeholder.com/140x200' },
        { id: 6, titulo: 'The Godfather', ano: 1972, imagen: 'https://via.placeholder.com/140x200' },
        { id: 7, titulo: 'Forrest Gump', ano: 1994, imagen: 'https://via.placeholder.com/140x200' },
      ]
    }
  ];

  peliculasUsuarios = [
  { id: 7, titulo: 'Inception', ano: 2010 },
  { id: 8, titulo: 'Interstellar', ano: 2014 },
  { id: 9, titulo: 'The Dark Knight', ano: 2008 },
  { id: 10, titulo: 'Dune 2', ano: 2024 },
  ];

  switchTab(tab: string) {
    this.tabActive = tab;
  }
}
