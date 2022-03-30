import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatosUsuarios } from '../tabla-usuarios/tabla-usuarios.component';
import { MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-usuarios-mobile',
  templateUrl: './tabla-usuarios-mobile.component.html',
  styleUrls: ['./tabla-usuarios-mobile.component.scss'],
})
export class TablaUsuariosMobileComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'selector',
    'posicion',
    'nombre',
    'dependencia',
    'compania',
    'oficina',
    'correo',
    'registro',
    'estatus',
  ];
  dataSource = new MatTableDataSource<DatosUsuarios>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    this.paginator._intl = {
      itemsPerPageLabel: 'Mostrar',
      firstPageLabel: '',
      lastPageLabel: '',
      nextPageLabel: '',
      previousPageLabel: '',
      changes: new Subject(),
      getRangeLabel(page, pageSize, lenght): string {
        return `${page + 1 + page * (pageSize - 1)} al ${
          page + pageSize + page * (pageSize - 1)
        } de ${lenght} registros`;
      },
    };
  }

  ngOnInit(): void {}
}

const ELEMENT_DATA: DatosUsuarios[] = [
  {
    nombre: 'Jaime Medina Suarez',
    dependencia: 'AMIS',
    compania: 'AMIS',
    oficina: 'AMIS',
    correo: 'josemartinez@amis.com.mx',
    registro: '12/09/2021',
    estatus: true,
    posicion: 1,
  },
  {
    nombre: 'Javier Medina Suarez',
    dependencia: 'AMIS',
    compania: 'AMIS',
    oficina: 'AMIS',
    correo: 'josemartinez@amis.com.mx',
    registro: '13/09/2021',
    estatus: true,
    posicion: 2,
  },
  {
    nombre: 'Ana Medina Suarez',
    dependencia: 'AMIS',
    compania: 'AMIS',
    oficina: 'AMIS',
    correo: 'josemartinez@amis.com.mx',
    registro: '14/09/2021',
    estatus: false,
    posicion: 3,
  },
  {
    nombre: 'Eduadro Medina Suarez',
    dependencia: 'AMIS',
    compania: 'AMIS',
    oficina: 'AMIS',
    correo: 'josemartinez@amis.com.mx',
    registro: '15/09/2021',
    estatus: true,
    posicion: 4,
  },
  {
    nombre: 'Eduadro Medina Suarez',
    dependencia: 'AMIS',
    compania: 'AMIS',
    oficina: 'AMIS',
    correo: 'josemartinez@amis.com.mx',
    registro: '15/09/2021',
    estatus: true,
    posicion: 5,
  },
  {
    nombre: 'Eduadro Medina Suarez',
    dependencia: 'AMIS',
    compania: 'AMIS',
    oficina: 'AMIS',
    correo: 'josemartinez@amis.com.mx',
    registro: '15/09/2021',
    estatus: true,
    posicion: 6,
  },
];
