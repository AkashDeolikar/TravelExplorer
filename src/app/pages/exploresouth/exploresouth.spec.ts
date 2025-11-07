import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exploresouth } from './exploresouth';

describe('Exploresouth', () => {
  let component: Exploresouth;
  let fixture: ComponentFixture<Exploresouth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exploresouth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exploresouth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
