import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Step - 9
  // Create an array of Object to store user data
  serverElements = [
    // Initially pass two values..
    { type: 'server', name: 'Test Server one', content: 'Test server Content' },
    { type: 'server', name: 'Test Server Two', content: 'Test server Content' }
  ];



  // Step - 10 ( Next step - app.component.html )
  // Here we will received those data and store it inside a variable
  // we can also define type of object to expect data in this way
  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

}
