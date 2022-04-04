import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatosUsuarios } from '../tabla-usuarios/tabla-usuarios.component';
import { MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-tabla-usuarios-mobile',
  templateUrl: './tabla-usuarios-mobile.component.html',
  styleUrls: ['./tabla-usuarios-mobile.component.scss'],
})
export class TablaUsuariosMobileComponent
  implements OnInit, AfterViewInit, OnChanges
{
  displayedColumns: string[];
  dataSource: MatTableDataSource<DatosUsuarios>;
  selection: SelectionModel<DatosUsuarios>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('userTableMobile') userTable!: any;
  @Output('selectedUser') selectedUser: EventEmitter<DatosUsuarios[]>;
  @Input('unselect') unselect: boolean;

  constructor() {
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
    this.selectedUser = new EventEmitter<DatosUsuarios[]>();
    this.unselect = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['unselect'].currentValue !== changes['unselect'].previousValue
    ) {
      if (changes['unselect'].currentValue == true) {
        this.selection.clear();
      }
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    this.paginator._intl = {
      itemsPerPageLabel: 'Mostrar',
      firstPageLabel: 'Ir al inicio',
      lastPageLabel: 'Ir al final',
      nextPageLabel: 'Siguiente',
      previousPageLabel: 'Atrás',
      changes: new Subject(),
      getRangeLabel(page, pageSize, lenght): string {
        return `${page + 1 + page * (pageSize - 1)} al ${
          page + pageSize + page * (pageSize - 1)
        } de ${lenght} registros`;
      },
    };
  }

  ngOnInit(): void {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
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

  checkRow(row?: DatosUsuarios) {
    if (row) {
      this.selection.toggle(row);
      this.selectedUser.emit(this.selection.selected);

      setTimeout(() => {
        document.querySelectorAll('.mat-checkbox').forEach((row) => {
          row.parentElement?.parentElement?.classList.remove('checkedElement');
        });

        document.querySelectorAll('.mat-checkbox-checked').forEach((row) => {
          row.parentElement?.parentElement?.classList.add('checkedElement');
        });
      }, 100);
    }
  }
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
