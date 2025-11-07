import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Khajjiar } from './khajjiar';

describe('Khajjiar', () => {
  let component: Khajjiar;
  let fixture: ComponentFixture<Khajjiar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Khajjiar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Khajjiar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
