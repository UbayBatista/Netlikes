import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film',
  imports: [],
  templateUrl: './film.html',
  styleUrl: './film.css',
})
export class Film {
  @Input() image!: string;
  @Input() title!: string;
  @Input() year!: number;
  @Input() id!: number;
  @Input() recommendations!: number;
}

