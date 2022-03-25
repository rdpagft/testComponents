import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDataComponent } from './one-data.component';

describe('OneDataComponent', () => {
  let component: OneDataComponent;
  let fixture: ComponentFixture<OneDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
