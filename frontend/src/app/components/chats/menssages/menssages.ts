import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";

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
export class Menssages implements OnInit, OnDestroy{
    @Input() user: string="Cristiano"
    @Input() person: string="Messi"

    messageHistory: Menssage[] = [
        { text: 'Hola, ¿qué tal?', itsMe: false },
        { text: '¡Todo bien! Entrenando.', itsMe: true }
    ];

        private intervalId: any; 
        private countMessage = 0;
        constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.intervalId = setInterval(() => {
            this.sendAutomaticMessage(); 
            this.countMessage++;     
            if (this.countMessage >= 5) {
                clearInterval(this.intervalId); 
            }
        }, 5000); 
    }


    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    randomPhrase: string[] = [
      "¡Hola! ¿Cómo va el entrenamiento?",
      "Ayer jugamos un partidazo ⚽",
      "¿Viste el golazo que marqué?",
      "Siuuuuuuu",
      "Me voy al gimnasio, luego hablamos.",
      "Qué buen clima para jugar hoy."
    ];

    sendAutomaticMessage() {
        
        const number = Math.floor(Math.random() * 6);

        const randomText = this.randomPhrase[number];
        

        this.messageHistory.push(
            { text: randomText, itsMe: false },
        );

        this.cdr.detectChanges();
    }
   
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