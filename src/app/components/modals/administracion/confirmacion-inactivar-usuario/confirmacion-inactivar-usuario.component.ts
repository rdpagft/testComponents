import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmacionEdicionUsuarioComponent } from '../confirmacion-edicion-usuario/confirmacion-edicion-usuario.component';

@Component({
  selector: 'app-confirmacion-inactivar-usuario',
  templateUrl: './confirmacion-inactivar-usuario.component.html',
  styleUrls: ['./confirmacion-inactivar-usuario.component.scss']
})
export class ConfirmacionInactivarUsuarioComponent implements OnInit {
  confirm:boolean;
  counter: number;
  constructor( private dialog: MatDialogRef<ConfirmacionEdicionUsuarioComponent>) { 
    this.confirm = false
    this.counter = 5
  }

  ngOnInit(): void {
  }
  agree(){
    this.confirm = true
    let interval = setInterval(()=>{
      this.counter = this.counter - 1
      if(this.counter == 0) {
        this.dialog.close()
        clearInterval(interval)
      }
    }, 1000)
  }
}
