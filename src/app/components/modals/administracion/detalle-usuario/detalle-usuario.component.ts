import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {

  constructor(private dialog: MatDialogRef<DetalleUsuarioComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialog.close()
  }

}
