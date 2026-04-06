import { Component, Input } from "@angular/core";

@Component({
    selector: "app-profile-header",
    standalone: true,
    templateUrl: "./profileHeader.html",
    styleUrl: "./profileHeader.css"
})
export class ProfileHeader{
    @Input() userName: string = "Cristiano";
    openMenu: boolean = false;

    Menu(){
        this.openMenu = !this.openMenu;
    }
}