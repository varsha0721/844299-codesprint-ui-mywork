import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftorderComponent } from './giftorder.component';

describe('GiftorderComponent', () => {
  let component: GiftorderComponent;
  let fixture: ComponentFixture<GiftorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
