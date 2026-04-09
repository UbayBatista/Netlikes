import { Component, Input } from "@angular/core";
import { Users } from "./users/users";
import { Menssages } from "./menssages/menssages";
@Component({
    selector: "app-social-chats",
    standalone: true,
    imports: [Users, Menssages],
    templateUrl: "./chats.html",
    styleUrl: "./chats.css"
})
export class Chats{

    currentUser: string = 'Messi';
    selectedChat: boolean = false;

    seeChat(event: { user: string }) {
        this.currentUser = event.user;
        this.selectedChat = true;
    }

    returnToList() {
        this.selectedChat = false;
    }
}
