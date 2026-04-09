import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCast } from './movie-cast';

describe('MovieCast', () => {
  let component: MovieCast;
  let fixture: ComponentFixture<MovieCast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCast],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
