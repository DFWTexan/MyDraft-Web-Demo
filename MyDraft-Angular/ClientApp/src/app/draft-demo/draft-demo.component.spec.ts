import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftDemoComponent } from './draft-demo.component';

describe('DraftDemoComponent', () => {
  let component: DraftDemoComponent;
  let fixture: ComponentFixture<DraftDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
