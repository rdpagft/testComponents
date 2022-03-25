import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoEventComponent } from './two-event.component';

describe('TwoEventComponent', () => {
  let component: TwoEventComponent;
  let fixture: ComponentFixture<TwoEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
