import { Component } from "@angular/core";
import {ProfileBody} from "../../components/profileComponents/profileComponents";
import { ProfileHeader } from "../../components/profileHeader/profileHeader";
import { Header } from "../../components/header/header";

@Component({
    selector:"app-profile-complete",
    standalone: true,
    imports: [ProfileBody, ProfileHeader, Header],
    templateUrl: "./profileBody.html"
})
export class ProfileComplete{
    
}