import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCompleto } from './profileBody';

describe('Perfilheader', () => {
  let component: PerfilCompleto;
  let fixture: ComponentFixture<PerfilCompleto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCompleto],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilCompleto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
