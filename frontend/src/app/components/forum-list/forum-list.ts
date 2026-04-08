import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "../search-bar/search-bar";

@Component({
  selector: 'app-forum-list',
  standalone: true,
  imports: [FormsModule, SearchBarComponent],
  templateUrl: './forum-list.html',
  styleUrl: './forum-list.css'
})
export class ForumList {
  @Output() clickedForum = new EventEmitter<{title: string}>(); 

  search = signal('');

  filmsForum = [
    { title: 'Los juegos del hambre', active: true },
    { title: 'Vaiana', active: false },
    { title: 'Los juegos del hambre: sinsajo - Parte 2', active: false },
    { title: 'Harry Potter y la piedra filosofal', active: false },
    { title: 'Avatar', active: false }
  ];

  filteredFilms = [...this.filmsForum];

  selectForum(selectedFilm: any) {
    this.filmsForum.forEach(p => p.active = false);
    selectedFilm.active = true;
    
    this.clickedForum.emit({ title: selectedFilm.title });
    console.log('Cambiando al foro de:', selectedFilm.title);
  }

  handleSearch(text: string) {
    const searchLow = text.toLowerCase();
    this.filteredFilms = this.filmsForum.filter(film => 
      film.title.toLowerCase().includes(searchLow)
    );
  }
}