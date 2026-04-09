import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('NetLikes');

  // Inyectamos el router
  private router = inject(Router);
  
  // Signal para controlar la visibilidad del Header, Footer y Márgenes
  public showLayout = signal(true);

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Rutas donde NO queremos Footer ni márgenes
      const noLayoutRoutes = ['/login', '/register'];
      
      const currentUrl = event.urlAfterRedirects.split('?')[0];
      
      // Si la URL actual está en el array, showLayout será false.
      this.showLayout.set(!noLayoutRoutes.includes(currentUrl));
    });
  }
}
