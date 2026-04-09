import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail implements OnInit {
  
  movieData = {
    title: 'Kill Bill: Volumen 1',
    year: 2003,
    backdropPath: 'https://image.tmdb.org/t/p/original/iffzIhuLAO38Po6sh1s6ZEVwlNL.jpg',
    posterPath: 'https://image.tmdb.org/t/p/w600_and_h900_face/5yv2q8K15xuj79cMcLWSbBwzoXy.jpg', 
    qualification: '18',
    date: '5/3/2004 (ES)',
    genres: ['Acción', 'Crimen', 'Thriller'],
    duration: '1h 51min',
    slogan: 'Una venganza que tardó cuatro años en llegar.',
    description: 'Una asesina profesional, conocida como La Novia, despierta de un coma de cuatro años decidida a vengarse de la banda de asesinos que la traicionó y casi la mata.',
    platforms: ['https://image.tmdb.org/t/p/original/emthp39XA2YScoYL1p0sdbAH2WA.jpg', 'https://image.tmdb.org/t/p/original/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg', 'https://image.tmdb.org/t/p/original/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg'],
    cast: [
      { name: 'Uma Thurman', character: 'La Novia', photoPath: 'https://media.themoviedb.org/t/p/w300_and_h450_face/sBgAZWi3o4FsnaTvnTNtK6jpQcF.jpg' },
      { name: 'Lucy Liu', character: 'O-Ren Ishii', photoPath: 'https://media.themoviedb.org/t/p/w300_and_h450_face/9nbtjqsx3De7hO2XDtrBQ7M9VCH.jpg' },
      { name: 'David Carradine', character: 'Bill', photoPath: 'https://media.themoviedb.org/t/p/w300_and_h450_face/1X2GlkMKS9FIG1kGou7o6LRqAjz.jpg' },
      { name: 'Michael Søren Madsen', character: 'Budd', photoPath: 'https://media.themoviedb.org/t/p/w300_and_h450_face/2pKJJKeCggtLOE4hzqgq07KYqFh.jpg' },
      { name: 'Daryl Hannah', character: 'Elle Driver', photoPath: 'https://media.themoviedb.org/t/p/w300_and_h450_face/5FllFmoiaru7tjXJ6Orc11OpQcw.jpg' }
    ],
    trailers: ['https://www.youtube.com/watch?v=wskEQT7sOxo&t=2s', 'https://www.youtube.com/watch?v=7kSuas6mRpk']
  };

  dominantColor = 'rgba(255, 255, 255, 0)'; 
  isWatched = false;
  isWatchLater = false;
  currentRating: string | null = null; 
  safeTrailers: SafeResourceUrl[] = [];

  constructor(private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.extractColorFromImage(this.movieData.posterPath);
    this.safeTrailers = this.movieData.trailers.map(url => 
      this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url.match(/v=([^&]{11})|youtu\.be\/([^&]{11})/)?.[1] || url.match(/v=([^&]{11})|youtu\.be\/([^&]{11})/)?.[2]}`)
    );
  }

  formatGenres = (g: string[]) => g?.length ? g.join(', ').replace(/, ([^,]*)$/, ' y $1') : '';

  toggleWatched() { 
    this.isWatched = !this.isWatched; 
    if (this.isWatched) this.isWatchLater = false; else this.currentRating = null; 
  }

  toggleWatchLater() { 
    this.isWatchLater = !this.isWatchLater; 
    if (this.isWatchLater) { this.isWatched = false; this.currentRating = null; }
  }

  shareMovie() { console.log('Abriendo menú de compartir...'); }

  rateMovie(rating: string) { 
    if (this.isWatched) this.currentRating = this.currentRating === rating ? null : rating;
  }

  extractColorFromImage(imageUrl: string) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = `${imageUrl}?t=${new Date().getTime()}`;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;
      
      canvas.width = img.width; canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      
      let r = 0, g = 0, b = 0, count = 0;
      for (let i = 0; i < data.length; i += 100) { 
        r += data[i]; g += data[i + 1]; b += data[i + 2]; count++;
      }
      
      this.dominantColor = `rgba(${~~(r/count)}, ${~~(g/count)}, ${~~(b/count)}, 0.35)`;
      this.cdr.detectChanges();
    };
  }
}