import { DatePipe, NgFor } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { PopularCities } from '../../shared/hotelData';
import { HotelService } from '../../service/hotel.service';
import { filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-inputs',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, DatePipe, FormsModule],
  templateUrl: './search-inputs.component.html',
  styleUrl: './search-inputs.component.css'
})
export class SearchInputsComponent {

  constructor(private hotel: HotelService, private router: Router) { }

  @Input() isHome: boolean = true;
  @Input() isBooking: boolean = false;

  popularCitiesInIndia = PopularCities.map((city) => city.name);

  showPriceFilter = false;
  roomOptions = false;

  priceFilter = [100, 1500, 2500, 5000];


  searchForm: any;

  showLocInput: boolean = false;
  checkIn: boolean = false;
  checkOut: boolean = false;

  parseDate(dateString: string | Date): Date {

    if (typeof dateString !== 'string') {
      return dateString;
    }
    // Assuming date string is in YYYY-MM-DD format
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero based
    const day = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  parseNormalDate(dateString: Date | string = new Date()): Date | string {
    if (typeof dateString === 'string') {
      return dateString;
    }

    const year = dateString.getFullYear();
    const month = (dateString.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month as it's zero-based
    const date = dateString.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${date}`;
  }


  setCheckOut() {
    const checkin = this.parseDate(this.searchForm.checkIn);
    this.searchForm.checkOut = new Date().setDate(checkin.getDate() + 1);
  }


  ngOnInit() {


    this.hotel.filters.subscribe(filter => {
      if (Object.keys(filter).length !== 0) {
        this.searchForm = { ...filter };
        this.searchForm.rooms = JSON.parse(this.searchForm.rooms)
        console.log(filter);
        this.searchForm.price = filter.price || this.priceFilter[1] + '-' + this.priceFilter[2];
      }
    })
  }

  fetchNoOfGuest() {
    console.log(this.searchForm.rooms);
    let guests = this.searchForm.rooms.map((room: any) => room.guest); // Fixed map function

    console.log(guests);

    let count = 0;

    for (let i = 0; i < guests.length; i++) { // Changed variable name to 'guests'
      count += guests[i].adult;
      count += guests[i].children;
    }

    return count;
  }



  onSubmit() {
    this.searchForm.price = this.searchForm.price
    // Form is valid, proceed with submission

    const filterOptions = { ...this.searchForm };



    filterOptions.rooms = JSON.stringify(this.searchForm.rooms);
    console.log(filterOptions);
    this.hotel.filters.next(filterOptions);

    this.router.navigate(['/hotels'])
  }



}
