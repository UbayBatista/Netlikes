import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTrailers } from './film-trailers';
import { SimpleChange } from '@angular/core';

describe('FilmTrailers', () => {
  let component: FilmTrailers;
  let fixture: ComponentFixture<FilmTrailers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmTrailers],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmTrailers);
    component = fixture.componentInstance;
  });

  it('debería renderizar la sección de trailers si el array tiene vídeos', () => {
    component.videos = ['abc', '123'];
    component.ngOnChanges({
      videos: new SimpleChange(null, component.videos, true)
    });
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.trailers-section')).toBeTruthy();
    expect(compiled.querySelectorAll('iframe').length).toBe(2);
  });

  it('NO debería renderizar absolutamente nada si el array de vídeos está vacío', () => {
    component.videos = [];
    component.ngOnChanges({
      videos: new SimpleChange(null, [], true)
    });
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.trailers-section')).toBeFalsy();
    expect(compiled.querySelector('h3')).toBeFalsy();
  });
});
