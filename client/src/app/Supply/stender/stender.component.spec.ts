import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StenderComponent } from './stender.component';

describe('StenderComponent', () => {
  let component: StenderComponent;
  let fixture: ComponentFixture<StenderComponent>;

  beforeEach(async(() => {
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
