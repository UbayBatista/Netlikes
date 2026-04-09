import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../search-bar/search-bar';

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

  searchText = '';

  handleSearch(text: string) {
      this.searchText = text.toLowerCase();
  }

  get filtereForums(){
      const searchLow = this.searchText.toLowerCase();
      return this.filmsForum.filter(forum => 
          forum.title.toLowerCase().includes(searchLow)
      );
  } 

  selectForum(index: number) {
    this.filtereForums.forEach(p => p.active = false);
    this.filtereForums[index].active = true;
    
    this.clickedForum.emit({ title: this.filtereForums[index].title });
    console.log('Cambiando al foro de:', this.filtereForums[index].title);
  }



}