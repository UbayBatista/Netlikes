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
  @Input() posterPath!: string;
  @Input() title!: string;
  @Input() year!: number;
  @Input() id!: number;
  @Input() recommendations!: number;

  readonly imgBaseUrl = 'https://media.themoviedb.org/t/p/w300_and_h450_face';

  ngOnInit(): void {
  }
}