import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genre } from "../../components/genre/genre";
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [Genre, Header, CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  genres = [
    {
      name: 'Action',
      films: [
        { title: 'Action 1', image: 'https://www.sonypictures.co.uk/sites/unitedkingdom/files/2020-12/Jumanji-keyArt_1.jpg' },
        { title: 'Action 2', image: 'https://via.placeholder.com/300x450' },
        { title: 'Action 3', image: 'https://via.placeholder.com/300x450' },
        { title: 'Action 4', image: 'https://via.placeholder.com/300x450' },
        { title: 'Action 5', image: 'https://via.placeholder.com/300x450' },
        { title: 'Action 6', image: 'https://via.placeholder.com/300x450' },
        { title: 'Action 7', image: 'https://via.placeholder.com/300x450' },
        { title: 'Action 8', image: 'https://via.placeholder.com/300x450' },
        { title: 'Action 9', image: 'https://via.placeholder.com/300x450' },
        { title: 'Action 10', image: 'https://via.placeholder.com/300x450' }
      ]
    },
    {
      name: 'Comedy',
      films: [
        { title: 'Comedy 1', image: 'https://via.placeholder.com/300x450' },
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
}
