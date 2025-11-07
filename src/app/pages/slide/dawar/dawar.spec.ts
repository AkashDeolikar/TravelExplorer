import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dawar } from './dawar';

describe('Dawar', () => {
  let component: Dawar;
  let fixture: ComponentFixture<Dawar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dawar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dawar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
