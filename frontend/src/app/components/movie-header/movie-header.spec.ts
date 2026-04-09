import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHeader } from './movie-header';

describe('MovieHeader', () => {
  let component: MovieHeader;
  let fixture: ComponentFixture<MovieHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
