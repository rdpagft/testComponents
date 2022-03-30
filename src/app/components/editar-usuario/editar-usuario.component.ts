import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    // this.dialog.close()
  }
}
