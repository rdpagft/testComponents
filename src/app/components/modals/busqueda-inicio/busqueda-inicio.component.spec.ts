import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaInicioComponent } from './busqueda-inicio.component';

describe('BusquedaInicioComponent', () => {
  let component: BusquedaInicioComponent;
  let fixture: ComponentFixture<BusquedaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
