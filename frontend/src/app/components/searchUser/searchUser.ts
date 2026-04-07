import { Component, Input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: "app-social-search-user",
    standalone: true,
    imports: [RouterLink],
    templateUrl: "./searchUser.html",
    styleUrl: "./searchUser.css"
})
export class SearchUser{
    @Input() usuario: string = "Messi";
    
    constructor(private router: Router) {}

    goToProfile(userName: string) {
        console.log('Viajando al perfil de:', userName);
        this.router.navigate(['/profile', userName]);
    }

    userList = ["Messi","Messi2", "Messi3", "Messi4", "Messi5", "Messi6"];
}