import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FilmHeader } from './film-header';

describe('FilmHeader', () => {
  let component: FilmHeader;
  let fixture: ComponentFixture<FilmHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmHeader],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmHeader);
    component = fixture.componentInstance;
    component.film = { 
      ttitle: 'Película de Prueba', 
      posterPath: '/test.jpg',
      releaseDate: '2024-01-01',
      ageRating: '16',
      runtime: 120,
      overView: 'Una descripción larga...',
      tagLine: 'El eslogan de la peli',
      watchProviders: [],
      genres: []
    } as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
