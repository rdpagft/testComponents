import { SelectionModel } from '@angular/cdk/collections';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

// @Injectable()
// export class MyCustomPaginatorIntl implements MatPaginatorIntl {
//   firstPageLabel = `First page`;
//   itemsPerPageLabel = `Items per page:`;
//   lastPageLabel = `Last page`;

//   changes = new Subject<void>();

//     // You can set labels to an arbitrary string too, or dynamically compute
//   // it through other third-party internationalization libraries.
//   nextPageLabel = 'Next page';
//   previousPageLabel = 'Previous page';

//   getRangeLabel(page: number, pageSize: number, length: number): string {
//     if (length === 0) {
//       return `Página 1 de 1`;
//     }
//     const amountPages = Math.ceil(length / pageSize);
//     return `Página ${page + 1} de ${amountPages}`;
//   }

// }

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss'],
})
export class TablaUsuariosComponent {
  prueba: string = 'Texto de pruebas';

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
    console.log(this.paginator);
    this.paginator._intl = {
      itemsPerPageLabel: 'Mostrar',
      firstPageLabel: '',
      lastPageLabel: '',
      nextPageLabel: '',
      previousPageLabel: '',
      changes: new Subject(),
      getRangeLabel(page, pageSize, lenght): string {
        return `Mostrando ${page + 1 + page * (pageSize - 1)} al ${
          page + pageSize + page * (pageSize - 1)
        } de un total de ${lenght} registros`;
      },
    };
    // this.paginator._intl.itemsPerPageLabel = 'Mostrar';
    // this.paginator._intl.itemsPerPageLabel = 'Prueba1';
    // this.paginator._intl.firstPageLabel = 'Prueba2';
    // this.paginator._intl.lastPageLabel = 'Prueba3';
    // this.paginator._intl.nextPageLabel = 'Prueba4';
    // this.paginator._intl.previousPageLabel = 'Prueba5';

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
