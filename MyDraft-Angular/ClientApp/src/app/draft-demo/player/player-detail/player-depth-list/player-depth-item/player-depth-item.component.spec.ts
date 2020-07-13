import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDepthItemComponent } from './player-depth-item.component';

describe('PlayerDepthItemComponent', () => {
  let component: PlayerDepthItemComponent;
  let fixture: ComponentFixture<PlayerDepthItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDepthItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDepthItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
