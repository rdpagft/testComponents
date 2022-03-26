import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivationEnd} from '@angular/router';
import { BusquedaInicioComponent } from '../../modals/busqueda-inicio/busqueda-inicio.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionEdicionUsuarioComponent } from '../../modals/administracion/confirmacion-edicion-usuario/confirmacion-edicion-usuario.component';
import { ConfirmacionInactivarUsuarioComponent } from '../../modals/administracion/confirmacion-inactivar-usuario/confirmacion-inactivar-usuario.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nameRoute:string;
  subscription !: Subscription;
  title: string

  showTableAction:boolean;

  constructor(private router: Router, public dialog: MatDialog) {
    this.nameRoute = "";  
    this.showTableAction = true
    this.title = ''
  }
 

  ngOnInit(): void { 
    this.getRoute()
  }
  back(){
    this.router.navigateByUrl('/')
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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  getRoute(){
    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.nameRoute = event.url.toString().replace('/', '');          
        console.log("RUTA", this.nameRoute);
        if(this.nameRoute == "administracion") this.nameRoute = "administración"
      }
      if(event instanceof ActivationEnd){
        console.log(event);
        this.title = event.snapshot.data['title']
      }
    });

  }
}
