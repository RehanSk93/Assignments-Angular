import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // Step - 6
  // Create an instance of EventEmitter to pass data child to parent
  // EventEmitter is a generic type so we have to define like this way
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // Step - 5
  // for two way data binding we store data into this variable
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }


  // Step - 7 (Next step - app.component.html)
  // first store data inside those variable help of two way data binding
  // then emit the value into serverCreated variable and pass to parent ~
  // ~ component with the help of @Output decorator
  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
