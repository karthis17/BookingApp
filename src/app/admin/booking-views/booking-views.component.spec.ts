import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingViewsComponent } from './booking-views.component';

describe('BookingViewsComponent', () => {
  let component: BookingViewsComponent;
  let fixture: ComponentFixture<BookingViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
