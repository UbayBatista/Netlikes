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

    filteredUser = [...this.Friends];

    selectUser(index: number) {
        this.Friends.forEach(p => p.active = false);
        this.Friends[index].active = true;
        
        this.clickedUser.emit({ user: this.Friends[index].name });
        console.log('Cambiando al chat de:', this.Friends[index].name);
    }

    handleSearch(text: string) {
        const searchLow = text.toLowerCase();
        this.filteredUser = this.Friends.filter(user => 
            user.name.toLowerCase().includes(searchLow)
        );
    }

}