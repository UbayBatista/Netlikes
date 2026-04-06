import { Component, Input } from "@angular/core";

@Component({
    selector: "app-social-search-user",
    standalone: true,
    templateUrl: "./searchUser.html",
    styleUrl: "./searchUser.css"
})
export class SearchUser{
    @Input() usuario: string = "Messi";

    listaUsuarios = [1, 2, 3, 4, 5, 6, 7, 8];
}