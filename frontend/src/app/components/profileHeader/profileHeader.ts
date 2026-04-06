import { Component, Input } from "@angular/core";

@Component({
    selector: "app-profile-header",
    standalone: true,
    templateUrl: "./profileHeader.html",
    styleUrl: "./profileHeader.css"
})
export class Profileheader{
    @Input() nombreUsuario: string = "Cristiano";
    menuAbierto: boolean = false;

    Menu(){
        this.menuAbierto = !this.menuAbierto;
    }
}