import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  a: number=0;
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.a +1);
      this.a++;
    }, 1000)
    // if((this.a%2) ==0){
    //   console.log(this.a + ' even');
    //   this.a++;
    // }else{
    //   console.log(this.a + ' odd');
    //   this.a++;
    // }
    
  }

  onStop(){
    clearInterval(this.interval);
  }
}
