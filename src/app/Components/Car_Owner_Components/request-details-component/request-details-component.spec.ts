import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsComponent } from './request-details-component';

describe('RequestDetailsComponent', () => {
  let component: RequestDetailsComponent;
  let fixture: ComponentFixture<RequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
