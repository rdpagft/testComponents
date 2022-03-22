import { Component, OnInit } from '@angular/core';
import { DetalleUsuarioComponent } from '../modals/administracion/detalle-usuario/detalle-usuario.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }


  option(redirect: string):void{
    console.log("reditect to", redirect);
    this.openUserOptions()
  }

  openUserOptions() {
    const dialogRef = this.dialog.open(DetalleUsuarioComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


