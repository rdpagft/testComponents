import { Component, OnInit } from '@angular/core';
import { DatosUsuarios } from '../tabla-usuarios/tabla-usuarios.component';

@Component({
  selector: 'app-aministracion',
  templateUrl: './aministracion.component.html',
  styleUrls: ['./aministracion.component.scss'],
})
export class AministracionComponent implements OnInit {
  selectedUser: DatosUsuarios[];
  showTableAction: boolean;

  constructor() {
    this.showTableAction = true;
    this.selectedUser = [];
  }
  ngOnInit(): void {}
  back() {
    this.showTableAction = false;
  }

  selectedUsers(selectedUser: DatosUsuarios[]) {
    this.selectedUser = selectedUser;
  }
}
