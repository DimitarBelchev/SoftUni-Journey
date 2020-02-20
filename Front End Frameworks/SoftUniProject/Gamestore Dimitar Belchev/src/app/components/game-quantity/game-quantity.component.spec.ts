import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameQuantityComponent } from './game-quantity.component';

describe('GameQuantityComponent', () => {
  let component: GameQuantityComponent;
  let fixture: ComponentFixture<GameQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
