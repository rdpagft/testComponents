import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationHeaderMobileComponent } from './administration-header-mobile.component';

describe('AdministrationHeaderMobileComponent', () => {
  let component: AdministrationHeaderMobileComponent;
  let fixture: ComponentFixture<AdministrationHeaderMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationHeaderMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
