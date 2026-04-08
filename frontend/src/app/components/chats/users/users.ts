import { Component, Output, EventEmitter, signal} from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
    selector: "app-social-chats-users",
    imports: [FormsModule],
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

    selectUser(index: number) {
        this.Friends.forEach(p => p.active = false);
        this.Friends[index].active = true;
        
        this.clickedUser.emit({ user: this.Friends[index].name });
        console.log('Cambiando al chat de:', this.Friends[index].name);
    }

}