import { Component, Input } from "@angular/core";

interface Menssage{
    text: string;
    itsMe: boolean;
}

@Component({
    selector: "app-social-chats-menssages",
    standalone: true,
    templateUrl: "./menssages.html",
    styleUrl: "./menssages.css"
})
export class Menssages{
    @Input() user: string="Cristiano"
    @Input() person: string="Messi"

    messageHistory: Menssage[] = [
        { text: 'Hola, ¿qué tal?', itsMe: false },
        { text: '¡Todo bien! Entrenando.', itsMe: true }
    ];

    sendMessage(newText: string) {
        if (newText.trim() !== '') {
            this.messageHistory.push({
                text: newText,
                itsMe: true 
            });
        }
    }

    height(textarea: HTMLTextAreaElement) {
        textarea.style.height = 'auto'; 
        textarea.style.height = textarea.scrollHeight + 'px';
    }

}