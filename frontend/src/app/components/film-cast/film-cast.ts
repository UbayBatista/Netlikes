import { Component, Input } from '@angular/core';
import { CastMember } from '../../models/film.models';

@Component({
  selector: 'app-film-cast',
  standalone: true,
  imports: [], 
  templateUrl: './film-cast.html',
  styleUrl: './film-cast.css',
})
export class FilmCast {
  @Input() cast: CastMember[] = [];
  readonly imgBaseUrl = 'https://media.themoviedb.org/t/p/w300_and_h450_face';
}
