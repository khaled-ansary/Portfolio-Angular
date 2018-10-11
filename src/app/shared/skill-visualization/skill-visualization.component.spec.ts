import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillVisualizationComponent } from './skill-visualization.component';

describe('SkillVisualizationComponent', () => {
  let component: SkillVisualizationComponent;
  let fixture: ComponentFixture<SkillVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
