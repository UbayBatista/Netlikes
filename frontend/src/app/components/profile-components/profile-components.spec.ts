import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBody } from './profile-components';

describe('Profileheader', () => {
  let component: ProfileBody;
  let fixture: ComponentFixture<ProfileBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBody],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
