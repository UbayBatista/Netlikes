import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Film } from './film';

describe('Film', () => {
  let component: Film;
  let fixture: ComponentFixture<Film>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Film],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Film);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
