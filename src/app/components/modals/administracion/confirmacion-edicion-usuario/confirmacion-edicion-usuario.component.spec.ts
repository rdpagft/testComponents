import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionEdicionUsuarioComponent } from './confirmacion-edicion-usuario.component';

describe('ConfirmacionEdicionUsuarioComponent', () => {
  let component: ConfirmacionEdicionUsuarioComponent;
  let fixture: ComponentFixture<ConfirmacionEdicionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionEdicionUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionEdicionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
