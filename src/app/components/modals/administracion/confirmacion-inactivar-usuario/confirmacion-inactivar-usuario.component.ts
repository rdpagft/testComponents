import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacion-inactivar-usuario',
  templateUrl: './confirmacion-inactivar-usuario.component.html',
  styleUrls: ['./confirmacion-inactivar-usuario.component.scss']
})
export class ConfirmacionInactivarUsuarioComponent implements OnInit {
  confirm:boolean;

  constructor() { 
    this.confirm = false
  }

  ngOnInit(): void {
  }
  agree(){
    this.confirm = true
  }
}
