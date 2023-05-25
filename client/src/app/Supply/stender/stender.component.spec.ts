import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StenderComponent } from './stender.component';

describe('StenderComponent', () => {
  let component: StenderComponent;
  let fixture: ComponentFixture<StenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
