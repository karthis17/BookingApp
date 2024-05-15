import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopularCities, hotelData } from '../shared/hotelData';
import { Reusable } from '../shared/reusableFucn';
import { CurrencyPipe, NgFor } from '@angular/common';
import { HotelService } from '../service/hotel.service';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, NgFor, ImageSliderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(private route: ActivatedRoute, private hotel: HotelService, private router: Router, private sanitizer: DomSanitizer) { }
  iframeHTML!: SafeHtml;
  data: any;
  showImage: boolean = false;
  roomData: any;
  reusable: Reusable = new Reusable();
  guestCount: number = 0;

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.hotel.getOne(id).subscribe((result: any) => {
        this.data = result.hotel;
        this.iframeHTML = this.sanitizer.bypassSecurityTrustHtml(this.data.map);
      });
      this.hotel.filters.subscribe((filters: any) => {
        this.roomData = filters.rooms;
        this.roomData = JSON.parse(this.roomData);
        this.guestCount = this.guestCounts()
      });
      console.log(this.data);
    });
  }

  nav(id: any, roomType: any) {
    this.hotel.roomType.next(roomType);
    this.router.navigateByUrl(`bookings/${id}`);

  }

  guestCounts() {
    let count = 0;
    this.roomData.forEach((element: any) => {
      count += element.guest.adult;
      count += element.guest.children;
    });

    return count;
  }


}
