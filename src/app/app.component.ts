import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumber: number[] = [];
  evenNumber: number[] = [];

  onIntervalFired(event: number){
    if(event%2 == 0)
      this.evenNumber.push(event);
    else  
      this.oddNumber.push(event);
  }


}


// serverElements = [{type: 'server', name: 'Test server', content: ' bl bla bla'}];

// onServerAdded(serverData: {serverName: string, serverContent: string}) {
//   this.serverElements.push({
//     type: 'server',
//     name: serverData.serverName,
//     content: serverData.serverContent
//   });
// }

// onBluprintAdded(bluprintData: {serverName: string, serverContent: string}) {
//   this.serverElements.push({
//     type: 'blueprint',
//     name: bluprintData.serverName,
//     content: bluprintData.serverContent
//   });
// }