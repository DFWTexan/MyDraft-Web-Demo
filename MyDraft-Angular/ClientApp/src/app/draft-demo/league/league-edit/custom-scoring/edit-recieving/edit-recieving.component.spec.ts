import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecievingComponent } from './edit-recieving.component';

describe('EditRecievingComponent', () => {
  let component: EditRecievingComponent;
  let fixture: ComponentFixture<EditRecievingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecievingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecievingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
