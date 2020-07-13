import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDefspecialComponent } from './edit-defspecial.component';

describe('EditDefspecialComponent', () => {
  let component: EditDefspecialComponent;
  let fixture: ComponentFixture<EditDefspecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDefspecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDefspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
