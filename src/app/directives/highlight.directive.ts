import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() appHighlight : string =''

  constructor(private el : ElementRef) { }
  @HostListener('mouseenter') onMouseenter(){
    this.el.nativeElement.style.background= this.appHighlight
  }
   @HostListener('mouseleave') onMouseleave(){
    this.el.nativeElement.style.background = ""
  }
}
