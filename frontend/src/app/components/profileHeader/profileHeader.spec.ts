import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profileheader } from './profileHeader';

describe('Profileheader', () => {
  let component: Profileheader;
  let fixture: ComponentFixture<Profileheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profileheader],
    }).compileComponents();

    fixture = TestBed.createComponent(Profileheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
