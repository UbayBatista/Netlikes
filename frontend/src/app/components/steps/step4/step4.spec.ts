import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step4 } from './step4';
import { GenreService } from '../../../services/genre.service';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { vi } from 'vitest';

describe('Step4', () => {
  let component: Step4;
  let fixture: ComponentFixture<Step4>;
  let genreService: GenreService;

  const mockGenres = [
    { id: 1, name: 'Acción', selected: false },
    { id: 2, name: 'Comedia', selected: false }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4],
      providers: [
        GenreService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Step4);
    component = fixture.componentInstance;
    genreService = TestBed.inject(GenreService);

    vi.spyOn(genreService, 'getAllGenres').mockReturnValue(of(mockGenres));

    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle a genre selection', () => {
    const initialStatus = component.generos()[0].selected;
    
    component.toggleGenero(0);
    
    expect(component.generos()[0].selected).toBe(!initialStatus);
  });

  it('should calculate totalSelected correctly', () => {
    expect(component.totalSelected).toBe(0);
    component.toggleGenero(0);
    component.toggleGenero(1);
    expect(component.totalSelected).toBe(2);
  });
});