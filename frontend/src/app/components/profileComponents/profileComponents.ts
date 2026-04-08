import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-profile-components',
    standalone: true,
    templateUrl: './profileComponents.html',
    styleUrl: './profileComponents.css',
})

export class ProfileBody{
    @Input() title: string = 'bio';

    @Input() isEditing: boolean = false;
}