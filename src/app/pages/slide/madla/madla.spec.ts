import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Madla } from './madla';

describe('Madla', () => {
  let component: Madla;
  let fixture: ComponentFixture<Madla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Madla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Madla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
