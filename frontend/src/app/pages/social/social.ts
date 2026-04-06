import { Component, Input } from "@angular/core";
import { SearchUser } from "../../components/searchUser/searchUser";
import { Chats } from "../../components/chats/chats";
import { Header } from "../../components/header/header";

@Component({
    selector: "app-social",
    standalone: true,
    imports: [SearchUser, Chats, Header],
    templateUrl: "./social.html",
    styleUrl: "./social.css"
})
export class Social{

    modo_seleccionado: string="Buscar Usuario";

    cambiar_modo(nuevo_modo: string){
        this.modo_seleccionado = nuevo_modo;
    }

}