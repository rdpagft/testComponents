import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypografyComponent } from './typografy.component';

describe('TypografyComponent', () => {
  let component: TypografyComponent;
  let fixture: ComponentFixture<TypografyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypografyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypografyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
