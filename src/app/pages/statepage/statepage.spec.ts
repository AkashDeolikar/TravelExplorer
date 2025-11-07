import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statepage } from './statepage';

describe('Statepage', () => {
  let component: Statepage;
  let fixture: ComponentFixture<Statepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
