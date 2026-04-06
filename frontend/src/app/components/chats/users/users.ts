import { Component, Input } from "@angular/core";


@Component({
    selector: "app-social-chats-users",
    standalone: true,
    templateUrl: "./users.html",
    styleUrl: "./users.css"
})
export class Users{
    @Input() persona: string="Messi"
}