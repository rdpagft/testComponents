import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion-edicion-usuario',
  templateUrl: './confirmacion-edicion-usuario.component.html',
  styleUrls: ['./confirmacion-edicion-usuario.component.scss']
})
export class ConfirmacionEdicionUsuarioComponent implements OnInit {
  confirm:boolean;
  constructor( dialog: MatDialog) { 
    this.confirm = false
  }

  ngOnInit(): void {
  }

  agree(){
    this.confirm = true
  }
}
