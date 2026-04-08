import { Component } from '@angular/core';
import { Genre } from '../../components/genre/genre';
import { Film } from '../../components/film/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [Genre, Film]
})
export class Home {
  tabActive: string = 'paraTi';

  forYouFilms = [
    {
      name: 'Acción',
      films: [
        { id: 1, title: 'Mad Max', ano: 2015, image: 'https://via.placeholder.com/140x200' },
        { id: 2, title: 'John Wick', ano: 2014, image: 'https://via.placeholder.com/140x200' },
        { id: 3, title: 'Top Gun', ano: 2022, image: 'https://via.placeholder.com/140x200' },
        { id: 4, title: 'Mission Impossible', ano: 2023, image: 'https://via.placeholder.com/140x200' },
      ]
    },
    {
      name: 'Drama',
      films: [
        { id: 5, title: 'Oppenheimer', ano: 2023, image: 'https://via.placeholder.com/140x200' },
        { id: 6, title: 'The Godfather', ano: 1972, image: 'https://via.placeholder.com/140x200' },
        { id: 7, title: 'Forrest Gump', ano: 1994, image: 'https://via.placeholder.com/140x200' },
      ]
    }
  ];

  peliculasUsuarios = [
  { id: 7, title: 'Inception', ano: 2010, recomendations: 8,  image: 'https://c8.alamy.com/comp/2C4X05R/inception-2010-directed-by-christopher-nolan-and-starring-leonardo-dicaprio-joseph-gordon-levitt-ellen-page-tom-hardy-and-ken-watanabe-a-team-break-in-to-the-subconscious-of-a-businessman-using-dream-sharing-technology-in-order-a-plant-a-seed-to-influence-his-decision-in-the-real-world-2C4X05R.jpg' },
  { id: 8, title: 'Interstellar', ano: 2014, recomendations: 12, image: 'https://via.placeholder.com/140x200' },
  { id: 9, title: 'The Dark Knight', ano: 2008, recomendations: 15, image: 'https://via.placeholder.com/140x200' },
  { id: 10, title: 'Dune 2', ano: 2024, recomendations: 10, image: 'https://via.placeholder.com/140x200' },
  ];

  switchTab(tab: string) {
    this.tabActive = tab;
  }
}
