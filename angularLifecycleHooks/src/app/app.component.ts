import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Every time constructor will called first
  constructor() {
    console.log('Constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges() {

  }

}


// @ Angular support couple of life cycle hooks:-
//    1. ngOnChanges          -> Called after a bound input property changes.
//    2. ngOnInit             -> Called once the component is initialized.
//    3. ngDoCheck            -> Called during every change detection run.
//    4. ngAfterContentInit   -> Called every time the projected content has been checked.
//    5. ngAfterViewInit      -> Called after the component's view(and child views) have been
//                               initialized.
//    6. ngAfterViewChecked   -> Called every time the view(and child view) have been checked.
//    7. ngOnDestroy          -> Called once the component is about to be destroyed.
