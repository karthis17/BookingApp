import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleInput]',
  standalone: true
})
export class StyleInputDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #ccc');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '4px');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 2px 5px rgba(0,0,0,0.1)');
  }

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'borderColor', '#66afe9');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 0 8px rgba(102, 175, 233, 0.6)');
  }

  @HostListener('blur') onBlur() {
    this.renderer.setStyle(this.el.nativeElement, 'borderColor', '#ccc');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 2px 5px rgba(0,0,0,0.1)');
  }

}
