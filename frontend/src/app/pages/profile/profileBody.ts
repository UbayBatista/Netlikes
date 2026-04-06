import { Component } from "@angular/core";
import {Profilebody} from "../../components/profileComponents/profileComponents";
import { Profileheader } from "../../components/profileHeader/profileHeader";
import { Header } from "../../components/header/header";

@Component({
    selector:"app-profile-complete",
    standalone: true,
    imports: [Profilebody, Profileheader, Header],
    templateUrl: "./profileBody.html"
})
export class ProfileComplete{
    
}