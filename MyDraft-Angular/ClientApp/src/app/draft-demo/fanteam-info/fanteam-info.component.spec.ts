import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanteamInfoComponent } from './fanteam-info.component';

describe('FanteamInfoComponent', () => {
  let component: FanteamInfoComponent;
  let fixture: ComponentFixture<FanteamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanteamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanteamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
