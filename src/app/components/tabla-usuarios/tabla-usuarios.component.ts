import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditarUsuarioComponent } from '../modals/administracion/editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss'],
})
export class TablaUsuariosComponent implements AfterViewInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<DatosUsuarios>;
  selection: SelectionModel<DatosUsuarios>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    this.displayedColumns = [
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
    this.dataSource = new MatTableDataSource<DatosUsuarios>(ELEMENT_DATA);
    this.selection = new SelectionModel<DatosUsuarios>(true, []);
  }

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

  rowSelected(checked: boolean, row: any) {
    this.selection.toggle(row);

    if (this.selection.hasValue()) {
    }
  }

  editUser() {
    this.dialog.open(EditarUsuarioComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      autoFocus: false,
      panelClass: 'modals-admin',
    });
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
