import { CurrencyPipe } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { flatMap } from 'rxjs';
import { Reusable } from '../../shared/reusableFucn';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent {
  @Input() data: any;

  @Input() isSimilarContainer: boolean = false;

  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('Window resized!', event, window.innerWidth);

    this.setMobile()
  }

  reusable: Reusable = new Reusable();

  setMobile() {
    if (window.innerWidth <= 1023 && !this.isSimilarContainer) {
      this.isMobile = true;
    } else if (this.isSimilarContainer) {
      this.isMobile = true;
    }
    else {
      this.isMobile = false
    }
  }


  ngOnInit() {
    this.setMobile()
  }

  status = ['Bad', 'Not bad', 'Good', 'Very good', 'Excellent']


  getRatinsStatus() {
    if (this.data.ratings <= 1) {
      return this.status[0];
    } else if (this.data.ratings <= 2) {
      return this.status[1];
    } else if (this.data.ratings <= 3) {
      return this.status[2];
    } else if (this.data.ratings <= 4) {
      return this.status[3];
    } else {
      return this.status[1];
    }
  }

}
