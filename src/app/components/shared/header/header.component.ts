import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs';
import { BusquedaInicioComponent } from '../../modals/busqueda-inicio/busqueda-inicio.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionEdicionUsuarioComponent } from '../../modals/administracion/confirmacion-edicion-usuario/confirmacion-edicion-usuario.component';
import { ConfirmacionInactivarUsuarioComponent } from '../../modals/administracion/confirmacion-inactivar-usuario/confirmacion-inactivar-usuario.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  nameRoute:string;
  subscription !: Subscription;
  subscriptionModal !: Subscription;
  subscriptionModal2 !: Subscription;
  subscriptionModal3 !: Subscription;

  showTableAction:boolean;

  constructor(private router: Router, public dialog: MatDialog) {
    this.nameRoute = "";  
    this.showTableAction = true
  }
 
  ngOnDestroy(){
      this.subscriptionModal.unsubscribe()
      this.subscriptionModal2.unsubscribe()
      this.subscriptionModal3.unsubscribe()

      this.subscription.unsubscribe()
  }

  ngOnInit(): void { 
    this.getRoute()
  }
  back(){
    this.showTableAction = false
  }
  openDialog() {
    const dialogRef = this.dialog.open(BusquedaInicioComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      autoFocus: false,
      panelClass: "transparent-modal"
    });

    this.subscriptionModal =  dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.subscriptionModal.unsubscribe()
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(ConfirmacionEdicionUsuarioComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        autoFocus: false,
        panelClass: "transparent-modal"
    });

    this.subscriptionModal2 =  dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.subscriptionModal2.unsubscribe()
    });
  }

  openDialog3() {
    const dialogRef = this.dialog.open(ConfirmacionInactivarUsuarioComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        autoFocus: false,
        panelClass: "transparent-modal"
    });

    this.subscriptionModal3 =  dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.subscriptionModal3.unsubscribe()
    });
  }


  getRoute(){
    this.subscription = this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.nameRoute = event.url.toString().replace('/', '');          
        if(this.nameRoute == "administracion") this.nameRoute = "administración"
      }
    });
  }
}
