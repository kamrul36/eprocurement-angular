import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TenderDetailComponent } from './tender-detail.component';

describe('TenderDetailComponent', () => {
  let component: TenderDetailComponent;
  let fixture: ComponentFixture<TenderDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
