import { Component, Input } from '@angular/core';
import { CastMember } from '../../models/movie.models';

@Component({
  selector: 'app-movie-cast',
  standalone: true,
  imports: [], 
  templateUrl: './movie-cast.html',
  styleUrl: './movie-cast.css',
})
export class MovieCast {
  @Input() cast: CastMember[] = [];
  readonly imgBaseUrl = 'https://media.themoviedb.org/t/p/w300_and_h450_face';
}
