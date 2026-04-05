import { Component } from '@angular/core';
import { ForumList } from '../../components/forum-list/forum-list';
import { ChatWindow } from '../../components/chat-window/chat-window';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [ForumList, ChatWindow, Header],
  templateUrl: './forum.html',
  styleUrl: './forum.css'
})

export class Forum { 
  selectedForum: boolean = false;

  seeChat() {
    this.selectedForum = true;
  }
  returnToList() {
    this.selectedForum = false;
  }
}