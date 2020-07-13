import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomScoringComponent } from './custom-scoring.component';

describe('CustomScoringComponent', () => {
  let component: CustomScoringComponent;
  let fixture: ComponentFixture<CustomScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
