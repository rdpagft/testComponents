import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFolderComponent } from './research-folder.component';

describe('ResearchFolderComponent', () => {
  let component: ResearchFolderComponent;
  let fixture: ComponentFixture<ResearchFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
