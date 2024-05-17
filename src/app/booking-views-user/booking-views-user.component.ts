import { Component } from '@angular/core';
import { BookinksComponent } from '../admin/bookinks/bookinks.component';
import { BookinsService } from '../service/bookins.service';
import { StyleInputDirective } from '../directives/style-input.directive';

@Component({
  selector: 'app-booking-views-user',
  standalone: true,

  imports: [BookinksComponent, StyleInputDirective],
  templateUrl: './booking-views-user.component.html',
  styleUrl: './booking-views-user.component.css'
})
export class BookingViewsUserComponent {

  constructor(private bookingsService: BookinsService) { }

  bookings: any[] = [];

  ngOnInit() {
    this.bookingsService.getUserBookings().subscribe((user: any) => {
      this.bookings = user;
    });
  }

}
