import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  @Input('appCustom') format;
  constructor(private e1: ElementRef) { }
  @HostListener('blur') onBlur() {
    console.log('on Blur');
    const value: string = this.e1.nativeElement.value;
    if (this.format == 'lowercase') {
      this.e1.nativeElement.value = value.toLowerCase();
    } else {
      this.e1.nativeElement.value = value.toUpperCase();
    }
  }
}
