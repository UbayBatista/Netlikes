import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forum-list',
  standalone: true,
  imports: [FormsModule],
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

  selectForum(index: number) {
    this.filmsForum.forEach(p => p.active = false);
    this.filmsForum[index].active = true;
    
    this.clickedForum.emit({ title: this.filmsForum[index].title });
    console.log('Cambiando al foro de:', this.filmsForum[index].title);
  }
}