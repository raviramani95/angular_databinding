import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit{
  @Input('srElement') element: { type: string; name: string; content: string; };
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}


// constructor() { 
//   console.log('constructer call');
// }

// ngOnChanges(changes: SimpleChanges){
//   console.log('ngOnChange called');
//   console.log(changes);
// }

// ngOnInit(): void {
//   console.log('ngOnInit called');
// }