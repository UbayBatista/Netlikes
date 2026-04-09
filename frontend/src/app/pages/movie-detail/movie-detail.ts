import { Component} from '@angular/core';
import { MovieHeader } from '../../components/movie-header/movie-header';
import { MovieCast } from '../../components/movie-cast/movie-cast';
import { MovieTrailers } from '../../components/movie-trailers/movie-trailers';
import { Movie } from '../../models/movie.models';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    MovieHeader, 
    MovieCast, 
    MovieTrailers
  ],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {
  
  movieData: Movie | null = {
    id: 247,
    title: 'Kill Bill: Volumen 1',
    overview: 'Uma Thurman es una asesina que, el día de su boda, es atacada por los miembros de la banda de su jefe, Bill (David Carradine). Logra sobrevivir al ataque, aunque queda en coma. Cinco años después despierta con un trozo de metal en la cabeza y un gran deseo de venganza en su corazón.',
    adult: false,
    ageRating: '18',
    tagline: 'La sangrienta historia de una venganza',
    runtime: 111,
    releaseDate: '2004-5-3',
    posterPath: '/j5HFN6ZbGqZepIQ7sZRX9dMu8uk.jpg',
    genres: [
      { id: 28, name: 'Acción' },
      { id: 80, name: 'Crimen' },
    ],
    cast: [
      { id: 11, name: 'Uma Thurman', profile_path: '/sBgAZWi3o4FsnaTvnTNtK6jpQcF.jpg', character: 'La Novia' },
      { id: 12, name: 'Lucy Liu', profile_path: '/9nbtjqsx3De7hO2XDtrBQ7M9VCH.jpg', character: 'O-Ren Ishii' },
      { id: 13, name: 'David Carradine', profile_path: '/1X2GlkMKS9FIG1kGou7o6LRqAjz.jpg', character: 'Bill' },
      { id: 14, name: 'Michael Søren Madsen', profile_path: '/2pKJJKeCggtLOE4hzqgq07KYqFh.jpg', character: 'Budd' },
      { id: 15, name: 'Daryl Hannah', profile_path: '/5FllFmoiaru7tjXJ6Orc11OpQcw.jpg', character: 'Elle Driver' }
    ],
    videos: [
      { id: '1', name: 'Trailer 1', key: 'wskEQT7sOxo', type: 'Trailer', site: 'YouTube' },
    ],
    watchProviders: [
      { provider_id: 33, provider_name: 'Netflix', logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg' },
      { provider_id: 8, provider_name: 'Prime Video', logo_path: '/emthp39XA2YScoYL1p0sdbAH2WA.jpg' },
      { provider_id: 119, provider_name: 'HBO', logo_path: '/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg' }
    ]
  };

}