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
    }];

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
