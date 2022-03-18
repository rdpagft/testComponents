import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCardMobileComponent } from './table-card-mobile.component';

describe('TableCardMobileComponent', () => {
  let component: TableCardMobileComponent;
  let fixture: ComponentFixture<TableCardMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCardMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
