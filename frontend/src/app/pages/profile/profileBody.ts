import { Component, OnInit } from "@angular/core";
import {ProfileBody} from "../../components/profileComponents/profileComponents";
import { ProfileHeader } from "../../components/profileHeader/profileHeader";
import { Header } from "../../components/header/header";
import { ActivatedRoute } from '@angular/router'; 

@Component({
    selector:"app-profile-complete",
    standalone: true,
    imports: [ProfileBody, ProfileHeader, Header],
    templateUrl: "./profileBody.html"
})
export class ProfileComplete implements OnInit{
    profileName = ''; 
    textBio = '';
    itsMe = false;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        
        this.route.params.subscribe(params => {
            this.profileName = params['username']; 
            
            if (this.profileName === 'Messi') {
                this.textBio = 'Hola soy Messi, el 10.';
                this.itsMe = false;
            } else if (this.profileName === 'Cristiano Ronaldo') {
                this.textBio = 'Hola soy el Bicho Oficial, Siuuuu.';
                this.itsMe = true;
            } else {
                this.textBio = 'Biografía por defecto...';
                this.itsMe = false;
            }
        });
    }
}