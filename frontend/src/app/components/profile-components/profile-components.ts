import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-profile-components',
    standalone: true,
    templateUrl: './profile-components.html',
    styleUrl: './profile-components.css',
})

export class ProfileBody{
    @Input() title: string = 'bio';

    @Input() isEditing: boolean = false;
}