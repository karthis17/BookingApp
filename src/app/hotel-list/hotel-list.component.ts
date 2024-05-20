import { Component } from '@angular/core';
import { ProductContainerComponent } from '../sharingComponents/product-container/product-container.component';
import { PopularCities, hotelData } from '../shared/hotelData';
import { Router } from '@angular/router';
import { HotelService } from '../service/hotel.service';
import { SearchInputsComponent } from '../sharingComponents/search-inputs/search-inputs.component';
import { TitleCasePipe } from '@angular/common';
import { BehaviorSubject, debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [ProductContainerComponent, SearchInputsComponent, TitleCasePipe],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {

  constructor(private router: Router, private hotel: HotelService) { }

  hotel_data: any;

  activeTab = "price";

  priceFilter = ["Below ₹1500", "₹1500 - ₹2500", "₹2500 - ₹5500", "₹5500 - ₹8500", "₹8500 - ₹15500", "₹15500 - ₹30000", "above ₹30000"];

  location = PopularCities.map(loc => loc.name);

  amenities = ['free cancellation', 'front desk', 'AC', 'bar', 'Wifi', 'breakfast', 'spa service', 'swimming pool', 'parking', 'restaurant', 'fitness'];


  selectedFilter: any = {

  }


  filter = new BehaviorSubject<any>(this.selectedFilter);



  ngOnInit() {


    this.filter.pipe(
      debounceTime(300) // Debounce input to avoid rapid API requests

    ).subscribe((filters: any) => {

      this.hotel.getFiltered(filters).subscribe((data: any) => {
        this.hotel_data = data.hotels;
        console.log(this.hotel_data);
      });
    });


    this.hotel.filters.subscribe(data => {
      this.selectedFilter = data;
      this.filter.next(this.selectedFilter);
    })
  }

  nav(id: any) {
    this.router.navigateByUrl(`/hotel/${id}`);
  }



  setActiveTab(tab: string) {
    if (tab === this.activeTab) {
      this.activeTab = ''
    } else {
      this.activeTab = tab;
    }
  }

  addPrice(i: number) {

    if (!this.selectedFilter.price || typeof this.selectedFilter.price === 'string') {
      this.selectedFilter.price = [];
    }

    const price = this.priceFilter[i];
    const index = this.selectedFilter.price.indexOf(price);

    if (index === -1) {
      // Add price if not already in the array
      this.selectedFilter.price.push(price);
    } else {
      // Remove price if it's already in the array
      this.selectedFilter.price.splice(index, 1);
    }

    this.filter.next(this.selectedFilter); // Trigger filter update
    this.hotel.filters.next(this.selectedFilter);


  }


  addLocation(i: any) {
    if (!this.selectedFilter.location || typeof this.selectedFilter.location === 'string') {
      this.selectedFilter.location = [];
    }

    const location = this.location[i];
    const index = this.selectedFilter.location.indexOf(location);

    if (index === -1) {
      // Add location if not already in the array
      this.selectedFilter.location.push(location);
    } else {
      // Remove location if it's already in the array
      this.selectedFilter.location.splice(index, 1);
    }

    this.filter.next(this.selectedFilter); // Trigger filter update
    this.hotel.filters.next(this.selectedFilter);


  }

  addStarRating(i: any) {
    if (!this.selectedFilter.rating || typeof this.selectedFilter.rating === 'string') {
      this.selectedFilter.ratings = [];
    }

    const rating = i + 1;
    const index = this.selectedFilter.rating.indexOf(rating);

    if (index === -1) {
      // Add rating if not already in the array
      this.selectedFilter.rating.push(rating);
    } else {
      // Remove rating if it's already in the array
      this.selectedFilter.rating.splice(index, 1);
    }

    this.filter.next(this.selectedFilter); // Trigger filter update
    this.hotel.filters.next(this.selectedFilter);


  }

  addAmenities(i: any) {
    if (!this.selectedFilter.amenities || typeof this.selectedFilter.amenities === 'string') {
      this.selectedFilter.amenities = [];
    }

    let amenity = this.amenities[i]

    const index = this.selectedFilter.amenities.indexOf(amenity);

    if (index === -1) {
      // Add amenities if not already in the array
      this.selectedFilter.amenities.push(amenity);
    } else {
      // Remove amenities if it's already in the array
      this.selectedFilter.amenities.splice(index, 1);
    }

    this.filter.next(this.selectedFilter); // Trigger filter update
    this.hotel.filters.next(this.selectedFilter);


  }



}
