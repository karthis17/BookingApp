import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookinsService } from '../../service/bookins.service';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-booking-views',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './booking-views.component.html',
  styleUrl: './booking-views.component.css'
})
export class BookingViewsComponent {

  constructor(private route: ActivatedRoute, private bookings: BookinsService, private location: Location) { }

  bookingDetails: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.bookings.getBooking(id).subscribe(booking => {
        this.bookingDetails = booking;
      });
    });
  }

  back() {
    this.location.back();
  }

  getGuestCount() {
    let adultCount = 0;
    let childCount = 0;
    this.bookingDetails.rooms.forEach((room: any) => {
      adultCount += room.guest.adult;
      childCount += room.guest.children;
    });

    return adultCount + ' Adult ' + childCount + ' Children.'
  }

}
