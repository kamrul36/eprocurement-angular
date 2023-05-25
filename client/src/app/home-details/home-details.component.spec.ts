import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeDetailsComponent } from './home-details.component';

describe('HomeDetailsComponent', () => {
  let component: HomeDetailsComponent;
  let fixture: ComponentFixture<HomeDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
