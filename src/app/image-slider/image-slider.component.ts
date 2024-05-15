import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {

  @Input() images: any[] = [];
  @Output() close = new EventEmitter();
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  currentIndex = 0;


  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateSlider();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateSlider();
  }

  private updateSlider() {
    if (this.slider) {
      const slideWidth = this.slider.nativeElement.firstElementChild!.clientWidth;
      this.slider.nativeElement.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
    }
  }
}
