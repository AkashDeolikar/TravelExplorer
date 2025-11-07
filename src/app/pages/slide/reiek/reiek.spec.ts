import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reiek } from './reiek';

describe('Reiek', () => {
  let component: Reiek;
  let fixture: ComponentFixture<Reiek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reiek]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reiek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
