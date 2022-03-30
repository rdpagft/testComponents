import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUsuariosMobileComponent } from './tabla-usuarios-mobile.component';

describe('TablaUsuariosMobileComponent', () => {
  let component: TablaUsuariosMobileComponent;
  let fixture: ComponentFixture<TablaUsuariosMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaUsuariosMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaUsuariosMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
