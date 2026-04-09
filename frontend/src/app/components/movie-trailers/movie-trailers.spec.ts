import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTrailers } from './movie-trailers';

describe('MovieTrailers', () => {
  let component: MovieTrailers;
  let fixture: ComponentFixture<MovieTrailers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieTrailers],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieTrailers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
