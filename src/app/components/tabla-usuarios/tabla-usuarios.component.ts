import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss'],
})
export class TablaUsuariosComponent {
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
  selection = new SelectionModel<DatosUsuarios>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DatosUsuarios): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.posicion + 1
    }`;
  }
}

export interface DatosUsuarios {
  nombre: string;
  dependencia: string;
  compania: string;
  oficina: string;
  correo: string;
  registro: string;
  estatus: boolean;
  posicion: number;
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
];
