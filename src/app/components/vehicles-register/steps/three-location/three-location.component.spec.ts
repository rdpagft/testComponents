import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLocationComponent } from './three-location.component';

describe('ThreeLocationComponent', () => {
  let component: ThreeLocationComponent;
  let fixture: ComponentFixture<ThreeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
