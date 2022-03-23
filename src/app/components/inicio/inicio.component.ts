import { Component, OnInit, OnDestroy } from '@angular/core';
import { DetalleUsuarioComponent } from '../modals/administracion/detalle-usuario/detalle-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
  subscription !: Subscription;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }


  option(redirect: string):void{
    console.log("reditect to", redirect);
    this.openUserOptions()
  }

  openUserOptions() {
    let dialogRef = this.dialog.open(DetalleUsuarioComponent, {
        maxWidth:  '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        autoFocus: false,
    });

    this.subscription = dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.subscription.unsubscribe()
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}


