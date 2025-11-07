import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kanthalloor } from './kanthalloor';

describe('Kanthalloor', () => {
  let component: Kanthalloor;
  let fixture: ComponentFixture<Kanthalloor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kanthalloor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kanthalloor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
