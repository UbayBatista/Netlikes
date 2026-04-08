import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-profile-header",
    standalone: true,
    imports:[],
    templateUrl: "./profileHeader.html",
    styleUrl: "./profileHeader.css"
})
export class ProfileHeader{
    @Input() userName: string = "Cristiano";
    @Input() type: string = "Editar Perfil";
    @Input() option: string = "Ajustes";
    @Input() otherUser: string = 'No';
    openMenu: boolean = false;

    Menu(){
        this.openMenu = !this.openMenu;
    }

    constructor(private router: Router) {}

    logOut() {
        console.log('Ir al login');
        this.router.navigate(['/login']);
    }

    @Output() editClick = new EventEmitter<void>();
    onEdit() {
        this.editClick.emit();
    }
}