import { Component, OnInit } from '@angular/core';
import { DatosUsuarios } from '../tabla-usuarios/tabla-usuarios.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetalleUsuarioComponent } from '../../modals/administracion/detalle-usuario/detalle-usuario.component';

@Component({
  selector: 'app-aministracion',
  templateUrl: './aministracion.component.html',
  styleUrls: ['./aministracion.component.scss'],
})
export class AministracionComponent implements OnInit {
  selectedUser: DatosUsuarios[];
  unselect: boolean;

  constructor(private router: Router, public dialog: MatDialog) {
    this.selectedUser = [];
    this.unselect = false;
  }
  ngOnInit(): void {}

  back() {
    this.unselect = true;
  }

  selectedUsers(selectedUser: DatosUsuarios[]) {
    this.selectedUser = selectedUser;
    this.unselect = false;
  }

  editUser() {
    console.log('users :>> ', this.selectedUser);
    this.router.navigate(['editar-usuario', '1']);
  }

  detailUser() {
    this.dialog.open(DetalleUsuarioComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      autoFocus: false,
      panelClass: 'modals-admin',
      data: this.selectedUser,
    });
  }
}
