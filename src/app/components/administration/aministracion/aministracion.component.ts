import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aministracion',
  templateUrl: './aministracion.component.html',
  styleUrls: ['./aministracion.component.scss'],
})
export class AministracionComponent implements OnInit {
  
  showTableAction:boolean;

  constructor() {
    this.showTableAction = true

  }
  ngOnInit(): void {}
  back(){
    this.showTableAction = false
  }
}
