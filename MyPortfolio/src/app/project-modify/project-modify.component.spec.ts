import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModifyComponent } from './project-modify.component';

describe('ProjectModifyComponent', () => {
  let component: ProjectModifyComponent;
  let fixture: ComponentFixture<ProjectModifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectModifyComponent]
    });
    fixture = TestBed.createComponent(ProjectModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
