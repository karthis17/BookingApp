import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Reusable } from '../shared/reusableFucn';
import { CurrencyPipe, NgFor, TitleCasePipe } from '@angular/common';
import { HotelService } from '../service/hotel.service';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProductContainerComponent } from '../sharingComponents/product-container/product-container.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, NgFor, ImageSliderComponent, ProductContainerComponent, RouterLink, TitleCasePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(private route: ActivatedRoute, private hotel: HotelService, private router: Router, private el: ElementRef, private renderer: Renderer2, private sanitizer: DomSanitizer) { }
  iframeHTML!: SafeHtml;
  iframeWidth: string = '100%';
  iframeHeight: string = '500px';
  data: any;
  showImage: boolean = false;
  roomData: any;
  reusable: Reusable = new Reusable();
  guestCount: number = 0;
  similarHotel: any[] = []

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.hotel.getOne(id).subscribe((result: any) => {
        this.data = result.hotel;
        this.hotel.similar(this.data.location).subscribe((data: any) => {
          this.similarHotel = data;
        });
        this.iframeHTML = this.sanitizer.bypassSecurityTrustHtml(this.data.map);

        setTimeout(() => {
          this.setSizeOfMap()
        }, 1000)

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

  setSizeOfMap() {
    if (window.innerWidth < 1024) {
      // Set the innerHTML after view initialization
      this.renderer.setProperty(this.el.nativeElement.querySelector('#contentWrapper'), 'innerHTML', this.iframeHTML);
      // Find the iframe within the dynamically added content
      const iframe = this.el.nativeElement.querySelector('iframe');
      if (iframe) {
        this.renderer.setStyle(iframe, 'width', this.iframeWidth);
        this.renderer.setStyle(iframe, 'height', this.iframeHeight);
      }
    }
  }


  @HostListener('window:resize', ['$event'])
  OnResize() {

    this.setSizeOfMap()

  }


}
