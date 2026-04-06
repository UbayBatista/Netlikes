import { Component, Input } from "@angular/core";

interface Menssage{
    texto: string;
    soyYo: boolean;
}

@Component({
    selector: "app-social-chats-menssages",
    standalone: true,
    templateUrl: "./menssages.html",
    styleUrl: "./menssages.css"
})
export class Menssages{
    @Input() usuario: string="Cristiano"
    @Input() persona: string="Messi"

    historialMensajes: Menssage[] = [
        { texto: 'Hola, ¿qué tal?', soyYo: false },
        { texto: '¡Todo bien! Entrenando.', soyYo: true }
    ];

    enviarMensaje(nuevoTexto: string) {
        if (nuevoTexto.trim() !== '') {
            this.historialMensajes.push({
                texto: nuevoTexto,
                soyYo: true 
            });
        }
    }

    ajustarAltura(textarea: HTMLTextAreaElement) {
        textarea.style.height = 'auto'; 
        textarea.style.height = textarea.scrollHeight + 'px';
    }

}