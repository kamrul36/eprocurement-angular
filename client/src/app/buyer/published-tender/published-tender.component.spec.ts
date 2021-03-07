import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedTenderComponent } from './published-tender.component';

describe('PublishedTenderComponent', () => {
  let component: PublishedTenderComponent;
  let fixture: ComponentFixture<PublishedTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
