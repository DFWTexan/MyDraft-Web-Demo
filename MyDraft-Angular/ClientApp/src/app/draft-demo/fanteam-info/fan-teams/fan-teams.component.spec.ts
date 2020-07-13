import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanTeamsComponent } from './fan-teams.component';

describe('FanTeamsComponent', () => {
  let component: FanTeamsComponent;
  let fixture: ComponentFixture<FanTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
