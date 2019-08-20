import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {


  // Step - 12  ( Next step - server.component.html )
  // Here we simply store tha value which is coming from parent component that is app component...
  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

 

}
