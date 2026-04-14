import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-film-trailers',
  standalone: true,
  imports: [], 
  templateUrl: './film-trailers.html',
  styleUrl: './film-trailers.css',
})
export class FilmTrailers implements OnChanges {
  @Input() videos: string[] = [];
  
  safeTrailers: SafeResourceUrl[] = [];

  private sanitizer = inject(DomSanitizer);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videos'] && this.videos) {
      this.safeTrailers = this.videos.map(videoId => 
        this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`)
      );
    }
  }
}
