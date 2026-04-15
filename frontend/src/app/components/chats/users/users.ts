import { Component, Output, EventEmitter, signal} from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "../../search-bar/search-bar";

@Component({
    selector: "app-social-chats-users",
    imports: [FormsModule, SearchBarComponent],
    standalone: true,
    templateUrl: "./users.html",
    styleUrl: "./users.css"
})
export class Users{
   
    @Output() clickedUser = new EventEmitter<{user: string}>(); 

    search = signal('');
    
    Friends = [
        { name: 'Messi', active: true },
        { name: 'Luis Suarez', active: false },
        { name: 'Benzema', active: false },
        { name: 'La Roca', active: false }
    ];

    searchText = '';

    handleSearch(text: string) {
        this.searchText = text.toLowerCase();
    }

    get filteredUsers(){
        const searchLow = this.searchText.toLowerCase();
        return this.Friends.filter(user => 
            user.name.toLowerCase().includes(searchLow)
        );
    }

    selectUser(index: number) {
        this.filteredUsers.forEach(p => p.active = false);
        this.filteredUsers[index].active = true;
        
        this.clickedUser.emit({ user: this.filteredUsers[index].name });
    }


}