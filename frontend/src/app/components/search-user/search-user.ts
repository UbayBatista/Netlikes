import { Component, Input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { SearchBarComponent } from "../search-bar/search-bar";

@Component({
    selector: "app-social-search-user",
    standalone: true,
    imports: [ SearchBarComponent ],
    templateUrl: "./search-user.html",
    styleUrl: "./search-user.css"
})
export class SearchUser{
    @Input() usuario: string = "Messi";
    
    constructor(private router: Router) {}

    goToProfile(userName: string) {
        console.log('Viajando al perfil de:', userName);
        this.router.navigate(['/profile', userName]);
    }

    userList = ["Messi","Messi2", "Messi3", "Messi4", "Messi5", "Messi6"];

    searchText = '';

    handleSearch(text: string) {
        this.searchText = text.toLowerCase();
    }

    get filteredUsers(){
        const searchLow = this.searchText.toLowerCase();
        return this.userList.filter(user => 
            user.toLowerCase().includes(searchLow)
        );
    }
}