import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTrailers } from './film-trailers';

describe('FilmTrailers', () => {
  let component: FilmTrailers;
  let fixture: ComponentFixture<FilmTrailers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmTrailers],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmTrailers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
