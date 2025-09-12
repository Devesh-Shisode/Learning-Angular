import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
@Input() appHover : string ='';

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.color=this.appHover
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.color="";
  }

}
