import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FilmHeader } from './film-header';
import { vi } from 'vitest';

describe('FilmHeader', () => {
  let component: FilmHeader;
  let fixture: ComponentFixture<FilmHeader>;

  const mockFilm = {
    title: 'Película de Prueba',
    releaseDate: '2024-01-01',
    overView: 'Una descripción',
    tagLine: 'Un eslogan épico',
    runtime: 120,
    genres: ['Acción'],
    watchProviders: [{ id: 1, name: 'Netflix', logo: '/logo.png' }],
    posterPath: '/path.jpg',
    ageRating: '18+',
    adult: false,
    cast: [],
    videos: []
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmHeader],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmHeader);
    component = fixture.componentInstance;
    vi.spyOn(component, 'extractColorFromImage').mockImplementation(() => {});
  });

  it('debería mostrar el eslogan si existe (HU 2.1)', () => {
    component.film = { ...mockFilm } as any;
    
    fixture.detectChanges(); 

    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Un eslogan épico');
    expect(compiled.querySelector('h5.fw-bold.mt-4')).toBeTruthy();
  });

  it('NO debería mostrar la sección de Eslogan si film.tagLine está vacío', () => {
    component.film = { ...mockFilm, tagLine: '' } as any;
    
    fixture.detectChanges(); 
    
    const compiled = fixture.nativeElement;
    const headers = Array.from(compiled.querySelectorAll('h5'));
    const hasSlogan = headers.some((h: any) => h.textContent.includes('Eslogan'));
    
    expect(hasSlogan).toBeFalsy();
  });

  it('NO debería mostrar la sección "Dónde ver" si no hay proveedores', () => {
    component.film = { ...mockFilm, watchProviders: [] } as any;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const headers = Array.from(compiled.querySelectorAll('h5'));
    const hasProviders = headers.some((h: any) => h.textContent.includes('Dónde ver'));
    
    expect(hasProviders).toBeFalsy();
  });

  it('NO debería mostrar el encabezado de "Descripción" si film.overView está vacío', () => {
    component.film = { ...mockFilm, overView: '' } as any;
    
    fixture.detectChanges(); 
    
    const compiled = fixture.nativeElement;
    const headers = Array.from(compiled.querySelectorAll('h5'));
    const hasDescriptionHeader = headers.some((h: any) => h.textContent.includes('Descripción'));
    
    expect(hasDescriptionHeader).toBeFalsy();
  });
});