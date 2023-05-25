import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CtenderComponent } from './ctender.component';

describe('CtenderComponent', () => {
  let component: CtenderComponent;
  let fixture: ComponentFixture<CtenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CtenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
