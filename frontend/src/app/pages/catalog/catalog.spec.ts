import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Catalog } from './catalog';
import { FilmService } from '../../services/film.service';
import { of } from 'rxjs';
import { vi } from 'vitest'; // <--- Importamos Vitest

describe('Catalog', () => {
  let component: Catalog;
  let fixture: ComponentFixture<Catalog>;
  let filmServiceMock: any;

  const mockGenres = [
    { name: 'Acción', films: [{ title: 'Matrix', image: '' }, { title: 'John Wick', image: '' }] },
    { name: 'Drama', films: [{ title: 'La Milla Verde', image: '' }] },
    { name: 'Comedia', films: [{ title: 'Padre no hay más que uno', image: '' }] },
    { name: 'Animación', films: [{ title: 'Buscando a Nemo', image: '' }] }
  ];

  beforeEach(async () => {
    filmServiceMock = {
      getFilmsByGenre: vi.fn().mockReturnValue(of(mockGenres))
    };

    await TestBed.configureTestingModule({
      imports: [Catalog],
      providers: [
        { provide: FilmService, useValue: filmServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Catalog);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('debería filtrar películas por título sin distinguir mayúsculas', () => {
    component.filters('MATRIX');
    const results = component.filteredGenres;
    expect(results.length).toBe(1);
    expect(results[0].films[0].title).toBe('Matrix');
  });

  it('debería mostrar películas que contengan el texto parcial "la"', () => {
    component.filters('la');
    const results = component.filteredGenres;
    expect(results.length).toBe(1);
    expect(results[0].films[0].title).toBe('La Milla Verde');
  });

  it('debería devolver un array vacío si el título buscado no existe', () => {
    component.filters('Star Wars');
    expect(component.filteredGenres.length).toBe(0);
  });

  it('debería encontrar la película aunque se incluyan espacios en la búsqueda', () => {
    component.filters('  John Wick  '); 
    const results = component.filteredGenres;
    expect(results.length).toBe(1);
    expect(results[0].films[0].title).toBe('John Wick');
  });

  it('debería encontrar películas con tildes en el título', () => {
    component.filters('más');
    const results = component.filteredGenres;
    expect(results.length).toBe(1);
    expect(results[0].films[0].title).toContain('más');
  });
});