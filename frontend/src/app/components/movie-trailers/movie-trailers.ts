import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-trailers',
  standalone: true,
  imports: [], 
  templateUrl: './movie-trailers.html',
  styleUrl: './movie-trailers.css',
})
export class MovieTrailers implements OnChanges {
  @Input() videos: string[] = [];
  
  safeTrailers: SafeResourceUrl[] = [];

  private sanitizer = inject(DomSanitizer);

  ngOnChanges(changes: SimpleChanges): void {
    /*if (changes['videos'] && this.videos) {
      this.safeTrailers = this.videos
        .filter(v => v.site.toLowerCase() === 'youtube')
        .map(v => this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${v.key}`));
    }*/
  }
}
