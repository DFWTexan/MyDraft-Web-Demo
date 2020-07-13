import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeagueComponent } from './my-league.component';

describe('MyLeagueComponent', () => {
  let component: MyLeagueComponent;
  let fixture: ComponentFixture<MyLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
