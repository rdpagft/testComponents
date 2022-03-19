import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion-edicion-usuario',
  templateUrl: './confirmacion-edicion-usuario.component.html',
  styleUrls: ['./confirmacion-edicion-usuario.component.scss']
})
export class ConfirmacionEdicionUsuarioComponent implements OnInit {
  confirm:boolean;
  counter: number
  constructor(private dialog: MatDialogRef<ConfirmacionEdicionUsuarioComponent>) { 
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
