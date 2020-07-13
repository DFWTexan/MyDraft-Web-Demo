import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatListComponent } from './player-stat-list.component';

describe('PlayerStatListComponent', () => {
  let component: PlayerStatListComponent;
  let fixture: ComponentFixture<PlayerStatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
