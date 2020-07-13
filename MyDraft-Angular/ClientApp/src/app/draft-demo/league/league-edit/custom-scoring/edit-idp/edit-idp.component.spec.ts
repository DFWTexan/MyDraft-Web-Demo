import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIdpComponent } from './edit-idp.component';

describe('EditIdpComponent', () => {
  let component: EditIdpComponent;
  let fixture: ComponentFixture<EditIdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
