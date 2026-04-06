import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profilebody } from './profileComponents';

describe('Perfilheader', () => {
  let component: Profilebody;
  let fixture: ComponentFixture<Profilebody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profilebody],
    }).compileComponents();

    fixture = TestBed.createComponent(Profilebody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
