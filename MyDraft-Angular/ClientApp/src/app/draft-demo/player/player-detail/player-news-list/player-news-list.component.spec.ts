import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNewsListComponent } from './player-news-list.component';

describe('PlayerNewsListComponent', () => {
  let component: PlayerNewsListComponent;
  let fixture: ComponentFixture<PlayerNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
