import { OnInit, Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appBestSolution]'
})
export class BestSolutionDirective implements OnInit {

    // Step - 12
    // This is another example of decorator instead of using renderer....
    // This is the best solution any
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';             
    
    constructor() {}

    ngOnInit() {
    }


    // Step - 13
    // Using HostListener to apply background color
    @HostListener('mouseenter') mouseOver(eventData: Event) {
        this.backgroundColor = '#8080ff';
    }


    // Step - 14 (next step - app.component.ts file)
    // Using HostListener to apply background color
    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.backgroundColor = 'transparent';
    }

}