import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BidListComponent } from './bid-list.component';

describe('BidListComponent', () => {
  let component: BidListComponent;
  let fixture: ComponentFixture<BidListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BidListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
