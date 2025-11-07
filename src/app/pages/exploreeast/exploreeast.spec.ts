import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exploreeast } from './exploreeast';

describe('Exploreeast', () => {
  let component: Exploreeast;
  let fixture: ComponentFixture<Exploreeast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exploreeast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exploreeast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
