import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-profile-components',
    standalone: true,
    templateUrl: './profileComponents.html',
    styleUrl: './profileComponents.css',
})

export class Profilebody{
    @Input() titulo: string = 'bio';
}