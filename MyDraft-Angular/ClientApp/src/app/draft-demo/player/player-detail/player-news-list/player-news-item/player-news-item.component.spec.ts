import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNewsItemComponent } from './player-news-item.component';

describe('PlayerNewsItemComponent', () => {
  let component: PlayerNewsItemComponent;
  let fixture: ComponentFixture<PlayerNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
