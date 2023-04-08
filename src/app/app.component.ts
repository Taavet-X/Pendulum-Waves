import { Component, OnInit } from '@angular/core';
import { Pendulum } from './pendulum/pendulum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'Wave-Pendulum';
  numberOfPendulums = 10
  pendulums:Pendulum[] = []

  valueChange(value:any) {
      
      this.numberOfPendulums = Number(value);        
      this.create();
  }
  
  
  constructor(){
    this.create();
  }

  create(){    
    const newPendulums:Pendulum[] = []    
    const g = 9.8;
    const s = 45;
    const n = this.numberOfPendulums;
    const maxL = g / Math.pow((25 * 2 * Math.PI / s), 2);
    for(let i = 0; i < n; i++){
      const Q = 25 + n - i;
      const w = Q * 2 * Math.PI / s 
      const L = g / Math.pow(w, 2);
      newPendulums.push({
        id:i,
        lenght: 25 * L / maxL,
        size: 3 * L / maxL,
        theta:0,
        angularVelocity: w
      })
    }
    this.pendulums = newPendulums
  }

}
