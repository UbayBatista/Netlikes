import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './film.html',
  styleUrl: './film.css',
})
export class Film implements OnInit{
  @Input() image!: string;
  @Input() title!: string;
  @Input() year!: number;
  @Input() id!: number;
  @Input() recommendations!: number;

  ngOnInit(): void {
    console.log('Film component initialized with id:', this.id);
  }
}