import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmHeader } from './film-header';

describe('FilmHeader', () => {
  let component: FilmHeader;
  let fixture: ComponentFixture<FilmHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
