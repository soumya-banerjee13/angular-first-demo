import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEncapComponent } from './child-encap.component';

describe('ChildEncapComponent', () => {
  let component: ChildEncapComponent;
  let fixture: ComponentFixture<ChildEncapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEncapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
