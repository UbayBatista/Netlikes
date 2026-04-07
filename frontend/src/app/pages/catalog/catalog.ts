import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genre } from "../../components/genre/genre";
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../components/search-bar/search-bar';


@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [Genre, CommonModule, FormsModule, SearchBarComponent],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  searchText = '';
  genres = [
    {
      name: 'Action',
      films: [
        { title: 'Jumanji: Welcome to the Jungle', image: 'https://www.sonypictures.co.uk/sites/unitedkingdom/files/2020-12/Jumanji-keyArt_1.jpg' },
        { title: 'Jumanji', image: 'https://image.tmdb.org/t/p/original/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg' },
        { title: '300', image: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-300.jpg' },
        { title: 'Fast & Furious 5', image: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-a-todo-gas-5.jpg' },
        { title: 'Kill Bill: Volume 1', image: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-kill-bill.jpg' },
        { title: 'Los Mercenarios 2', image: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-los-mercernarios-2.jpg' },
        { title: 'Transporter 2', image: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-transporter-2.jpg' },
        { title: 'La jungla de cristal 2', image: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-la-jungla-de-cristal-2.jpg' },
        { title: 'Air Force One', image: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-air-force-one.jpg' },
        { title: 'Rambo: Acorralado Parte II', image: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-rambo-acorralado-parte-II.jpg' }
      ]
    },
    {
      name: 'Comedy',
      films: [
        { title: 'Welcome', image: 'https://tse4.mm.bing.net/th/id/OIP.yRLPu0rDKuIxexdejJAhywHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { title: 'Comedy 2', image: 'https://via.placeholder.com/300x450' },
        { title: 'Comedy 3', image: 'https://via.placeholder.com/300x450' },
        { title: 'Comedy 4', image: 'https://via.placeholder.com/300x450' },
        { title: 'Comedy 5', image: 'https://via.placeholder.com/300x450' },
        { title: 'Comedy 6', image: 'https://via.placeholder.com/300x450' },
        { title: 'Comedy 7', image: 'https://via.placeholder.com/300x450' },
        { title: 'Comedy 8', image: 'https://via.placeholder.com/300x450' },
        { title: 'Comedy 9', image: 'https://via.placeholder.com/300x450' },
        { title: 'Comedy 10', image: 'https://via.placeholder.com/300x450' }
      ]
    },
    {
      name: 'Drama',
      films: [
        { title: 'Drama 1', image: 'https://via.placeholder.com/300x450' },
        { title: 'Drama 2', image: 'https://via.placeholder.com/300x450' },
        { title: 'Drama 3', image: 'https://via.placeholder.com/300x450' },
        { title: 'Drama 4', image: 'https://via.placeholder.com/300x450' },
        { title: 'Drama 5', image: 'https://via.placeholder.com/300x450' },
        { title: 'Drama 6', image: 'https://via.placeholder.com/300x450' },
        { title: 'Drama 7', image: 'https://via.placeholder.com/300x450' },
        { title: 'Drama 8', image: 'https://via.placeholder.com/300x450' },
        { title: 'Drama 9', image: 'https://via.placeholder.com/300x450' },
        { title: 'Drama 10', image: 'https://via.placeholder.com/300x450' }
      ]
    },
    {
      name: 'Terror',
      films: [
        { title: 'Terror 1', image: 'https://via.placeholder.com/300x450' },
        { title: 'Terror 2', image: 'https://via.placeholder.com/300x450' },
        { title: 'Terror 3', image: 'https://via.placeholder.com/300x450' },
        { title: 'Terror 4', image: 'https://via.placeholder.com/300x450' },
        { title: 'Terror 5', image: 'https://via.placeholder.com/300x450' },
        { title: 'Terror 6', image: 'https://via.placeholder.com/300x450' },
        { title: 'Terror 7', image: 'https://via.placeholder.com/300x450' },
        { title: 'Terror 8', image: 'https://via.placeholder.com/300x450' },
        { title: 'Terror 9', image: 'https://via.placeholder.com/300x450' },
        { title: 'Terror 10', image: 'https://via.placeholder.com/300x450' }
      ]
    }
  ];

  filters(search: string) {
    this.searchText = search;
  }
  
  get filteredGenres() {
    const text = this.searchText.toLowerCase();

    return this.genres
      .map(g => ({
        ...g,
        films: g.films.filter(f =>
          f.title.toLowerCase().includes(text)
        )
      }))
      .filter(g => g.films.length > 0); // Oculta géneros vacíos
  }
}
