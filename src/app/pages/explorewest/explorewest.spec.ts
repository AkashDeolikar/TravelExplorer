import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explorewest } from './explorewest';

describe('Explorewest', () => {
  let component: Explorewest;
  let fixture: ComponentFixture<Explorewest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explorewest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Explorewest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
