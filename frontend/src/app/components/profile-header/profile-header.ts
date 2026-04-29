import { Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "app-profile-header",
    standalone: true,
    imports:[],
    templateUrl: "./profile-header.html",
    styleUrl: "./profile-header.css"
})
export class ProfileHeader{
    @Input() userName: string = '';
    @Input() userPicture: string = 'Error';
    @Input() isPrivate!: boolean;
    @Input() type: string = "Editar Perfil";
    @Input() option: string = "Ajustes";
    @Input() otherUser: string = 'No';
    @Input() followers!: number;
    @Input() following!: number;
    @Output() privacyChange = new EventEmitter<boolean>();
    @Output() logOut = new EventEmitter<void>();
    @Output() editClick = new EventEmitter<void>();
    @Output() openSocialModal = new EventEmitter<'Seguidores' | 'Seguidos'>();
    
    openMenu: boolean = false;

    Menu(){
        this.openMenu = !this.openMenu;
    }

    logout() {
        this.logOut.emit()
    }

    onEdit() {
        this.editClick.emit();
    }

    openSocial(type: 'Seguidores' | 'Seguidos') {
        this.openSocialModal.emit(type);
    }

    togglePrivacy() {
        this.privacyChange.emit(!this.isPrivate);
    }
}