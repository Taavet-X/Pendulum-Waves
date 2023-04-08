import { Component, Input, OnInit } from '@angular/core';
import { Pendulum } from './pendulum';

@Component({
  selector: 'app-pendulum',
  templateUrl: './pendulum.component.html',
  styleUrls: ['./pendulum.component.css']
})
export class PendulumComponent implements OnInit {
  
  @Input() pendulum!:Pendulum;

  t = 0;
  theta = 0;
  timeStart = Date.now();

  ngOnInit(): void {
    setInterval(()=>{
      this.t = (Date.now() - this.timeStart) / 1000;      
      this.theta = 0.3 * Math.cos(this.pendulum.angularVelocity*this.t)
    }, 15);
  }

}
