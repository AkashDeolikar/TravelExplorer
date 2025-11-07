import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explorenorth } from './explorenorth';

describe('Explorenorth', () => {
  let component: Explorenorth;
  let fixture: ComponentFixture<Explorenorth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explorenorth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Explorenorth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
