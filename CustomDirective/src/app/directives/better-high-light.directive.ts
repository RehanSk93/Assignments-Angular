import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]'
})
export class BetterHighLightDirective implements OnInit {

  // Step - 7 
  // inject Renderer2 
  constructor(private elementRef: ElementRef, 
              private renderer: Renderer2) { }

  ngOnInit() {
  }   
  
  // Step - 8
  // When hover the mouse text background color will be change......
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#8080ff');
  
  }

  // Step - 9  (next step - app.component.ts file)
  // When leave the mouse on the text, text background color will be normal....
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
  
  // mouseenter & mouseleave both are angular event listener...


}