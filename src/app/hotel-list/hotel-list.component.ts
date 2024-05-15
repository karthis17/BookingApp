import { Component } from '@angular/core';
import { ProductContainerComponent } from '../sharingComponents/product-container/product-container.component';
import { hotelData } from '../shared/hotelData';
import { Router } from '@angular/router';
import { HotelService } from '../service/hotel.service';
import { SearchInputsComponent } from '../sharingComponents/search-inputs/search-inputs.component';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [ProductContainerComponent, SearchInputsComponent],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {

  constructor(private router: Router, private hotel: HotelService) { }

  hotel_data: any;

  ngOnInit() {
    this.hotel.getFiltered({}).subscribe((data: any) => {
      this.hotel_data = data.hotels;
      console.log(this.hotel_data);
    });
    this.hotel.filters.subscribe(data => {
      console.log(data);
      this.hotel.getFiltered(data).subscribe((data: any) => {
        this.hotel_data = data.hotels;
        console.log(this.hotel_data);
      });
    })
  }

  nav(id: any) {
    this.router.navigateByUrl(`/hotel/${id}`);
  }

}
