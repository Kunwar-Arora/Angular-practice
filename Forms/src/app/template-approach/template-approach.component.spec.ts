import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateApproachComponent } from './template-approach.component';

describe('TemplateApproachComponent', () => {
  let component: TemplateApproachComponent;
  let fixture: ComponentFixture<TemplateApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateApproachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
