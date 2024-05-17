import { Component, Input } from '@angular/core';
import { ActiveWindowService } from '../../service/active-window.service';
import { BookinsService } from '../../service/bookins.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookinks',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './bookinks.component.html',
  styleUrl: './bookinks.component.css'
})
export class BookinksComponent {

  @Input() isAdmin: boolean = true;

  constructor(private activeWin: ActiveWindowService, private bookings: BookinsService, private router: Router) {

    this.activeWin.setactive('Bookings');

  }

  bookingsAll: any[] = [];
  selectedStatus: string = 'Ongoing';
  upcomingBookings: any[] = [];
  ongoingBookings: any[] = [];
  historicalBookings: any[] = [];

  @Input() tableDate: any[] = [];

  ngOnInit() {
    this.bookings.getBookings().subscribe((bookings: any) => {
      console.log(bookings);
      this.bookingsAll = bookings;
      this.categorizeBookings();
    });
  }


  onStatusChange(value: any) {
    if (value === 'Upcoming') {
      this.tableDate = this.upcomingBookings;
    } else if (value === 'Ongoing') {
      this.tableDate = this.ongoingBookings;
    } else {
      this.tableDate = this.historicalBookings;
    }
  }


  categorizeBookings(): void {
    const currentDate = new Date();
    this.bookingsAll.forEach(booking => {
      const checkInDate = new Date(booking.checkIn);
      const checkOutDate = new Date(booking.checkOut);

      if (checkOutDate < currentDate || checkInDate > currentDate) {
        this.historicalBookings.push(booking);
      } else if (checkInDate <= currentDate && checkOutDate >= currentDate) {
        this.ongoingBookings.push(booking);
      } else {
        this.upcomingBookings.push(booking);
      }

      this.tableDate = [...this.ongoingBookings];
    });
  }

  nav(id: any) {
    if (this.isAdmin)
      this.router.navigateByUrl(`admin/bookings/view/${id}`);
    else
      this.router.navigateByUrl(`booking/view/${id}`);
  }

}
