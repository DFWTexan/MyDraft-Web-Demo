import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKickingComponent } from './edit-kicking.component';

describe('EditKickingComponent', () => {
  let component: EditKickingComponent;
  let fixture: ComponentFixture<EditKickingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKickingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
