import { Component, Input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { SearchBarComponent } from "../search-bar/search-bar";

@Component({
    selector: "app-social-search-user",
    standalone: true,
    imports: [ SearchBarComponent ],
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

    filteredUser = [...this.userList];

    handleSearch(text: string) {
        const searchLow = text.toLowerCase();
        this.filteredUser = this.userList.filter(user => 
            user.toLowerCase().includes(searchLow)
        );
    }
}