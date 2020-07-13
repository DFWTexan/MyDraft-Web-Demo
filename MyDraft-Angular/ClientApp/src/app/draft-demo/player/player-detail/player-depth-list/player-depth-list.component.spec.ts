import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDepthListComponent } from './player-depth-list.component';

describe('PlayerDepthListComponent', () => {
  let component: PlayerDepthListComponent;
  let fixture: ComponentFixture<PlayerDepthListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDepthListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDepthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
