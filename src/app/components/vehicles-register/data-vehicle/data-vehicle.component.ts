import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-vehicle',
  templateUrl: './data-vehicle.component.html',
  styleUrls: ['./data-vehicle.component.scss']
})
export class DataVehicleComponent implements OnInit {
  step: number;
  title: string
  constructor() { 
    this.step = 3
    this.title = ""
  }

  ngOnInit(): void {
    switch(this.step){
      case 1:
        this.title = "Datos del vehiculo"
        break;
      case 2:
        this.title = "Datos del suceso"
        break;
      default:
        this.title = "Datos de la ubicacion del suceso"
    }
  }

}
