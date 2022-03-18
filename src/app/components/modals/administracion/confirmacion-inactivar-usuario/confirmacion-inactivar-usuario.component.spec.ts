import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionInactivarUsuarioComponent } from './confirmacion-inactivar-usuario.component';

describe('ConfirmacionInactivarUsuarioComponent', () => {
  let component: ConfirmacionInactivarUsuarioComponent;
  let fixture: ComponentFixture<ConfirmacionInactivarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionInactivarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionInactivarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
