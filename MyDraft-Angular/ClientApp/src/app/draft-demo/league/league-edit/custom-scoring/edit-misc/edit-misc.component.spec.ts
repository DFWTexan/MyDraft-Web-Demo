import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMiscComponent } from './edit-misc.component';

describe('EditMiscComponent', () => {
  let component: EditMiscComponent;
  let fixture: ComponentFixture<EditMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
