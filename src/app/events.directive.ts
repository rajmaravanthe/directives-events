import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvents]',
})
export class EventsDirective {

  currentIndex: number;
  constructor(public renderer: Renderer, public elementRef: ElementRef) {

  }

  @HostListener('mouseenter')
  onmouseenter() {
    this.currentIndex = parseInt(this.elementRef.nativeElement.cells[0].innerHTML) + 1;
    if(this.currentIndex % 2 === 0) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow')
    } else {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red')
    }
  }
  @HostListener('mouseleave')
  onmouseleave() {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'black')
  }
}
