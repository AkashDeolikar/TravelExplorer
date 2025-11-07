import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sarmoli } from './sarmoli';

describe('Sarmoli', () => {
  let component: Sarmoli;
  let fixture: ComponentFixture<Sarmoli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sarmoli]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sarmoli);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
