import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-vehicle',
  templateUrl: './data-vehicle.component.html',
  styleUrls: ['./data-vehicle.component.scss']
})
export class DataVehicleComponent implements OnInit {
  step: number;
  constructor() { 
    this.step = 1
  }

  ngOnInit(): void {
  }

}
