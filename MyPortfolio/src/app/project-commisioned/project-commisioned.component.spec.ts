import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCommisionedComponent } from './project-commisioned.component';

describe('ProjectCommisionedComponent', () => {
  let component: ProjectCommisionedComponent;
  let fixture: ComponentFixture<ProjectCommisionedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCommisionedComponent]
    });
    fixture = TestBed.createComponent(ProjectCommisionedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
