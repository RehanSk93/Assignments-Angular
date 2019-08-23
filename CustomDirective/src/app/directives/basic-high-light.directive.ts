import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  // Step - 2
  selector: '[appBasicHighLight]' 
  // this is a attribute selector.
  // we can use this directive any where in our code..
})
export class BasicHighLightDirectives implements OnInit {

  // Step -3 
  // create inject ElementRef for accessing DOM element directly
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Step - 4 (next step - app.component.ts file)
    // This approach is not a best way to change DOM Element..
    // Here we can change the DOM element directly, this is not a good approach..
     this.elementRef.nativeElement.style.backgroundColor = '#8080ff';
  }

  // ElementRef:-
  // An ElementRef is backed by a render-specific element. In the browser, 
  // this is usually a DOM element.


  // Security risk:-
  // Permitting direct access to the DOM can make your application more vulnerable to XSS attacks.
  // Carefully review any use of ElementRef in your code.


}


