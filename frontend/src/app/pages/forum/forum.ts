import { Component } from '@angular/core';
import { ForumList } from '../../components/forum-list/forum-list';
import { ChatWindow } from '../../components/chat-window/chat-window';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [ForumList, ChatWindow],
  templateUrl: './forum.html',
  styleUrl: './forum.css'
})

export class Forum { 
  currentTitle: string = 'Los juegos del hambre';
  selectedForum: boolean = false;

  seeChat(event: { title: string }) {
    this.currentTitle = event.title;
    this.selectedForum = true;
  }
  returnToList() {
    this.selectedForum = false;
  }
}