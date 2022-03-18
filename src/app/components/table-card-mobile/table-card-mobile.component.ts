import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { DatosUsuarios } from '../tabla-usuarios/tabla-usuarios.component';

@Component({
  selector: 'app-table-card-mobile',
  templateUrl: './table-card-mobile.component.html',
  styleUrls: ['./table-card-mobile.component.scss']
})
export class TableCardMobileComponent implements OnInit, AfterViewInit {
  @Input() dataTable!:DataSource<DatosUsuarios>;

  constructor() { }


  ngAfterViewInit(): void {
   console.log(this.dataTable);
  }

  ngOnInit(): void {
    console.log(this.dataTable);
  }



}
