import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingViewsUserComponent } from './booking-views-user.component';

describe('BookingViewsUserComponent', () => {
  let component: BookingViewsUserComponent;
  let fixture: ComponentFixture<BookingViewsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingViewsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingViewsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
