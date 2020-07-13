import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPassingComponent } from './edit-passing.component';

describe('EditPassingComponent', () => {
  let component: EditPassingComponent;
  let fixture: ComponentFixture<EditPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
