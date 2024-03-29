import { Component, OnInit } from '@angular/core';
import { DetalleUsuarioComponent } from '../modals/administracion/detalle-usuario/detalle-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { ReportedComponent } from '../modals/reports/reported/reported.component';
import { FoundComponent } from '../modals/reports/found/found.component';
import { Router } from '@angular/router';
import { InsurancePolicyComponent } from '../modals/reports/insurance-policy/insurance-policy.component';
import { VehicleDescriptionComponent } from '../modals/reports/vehicle-description/vehicle-description.component';
import { ResearchFolderComponent } from '../modals/reports/research-folder/research-folder.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
  }


  option(redirection: string):void{
    console.log("reditect to", redirection);
    switch(redirection){
      case 'reported':{
        this.router.navigateByUrl('reported')
      }
    }
  }

  openUserOptions() {
    let dialogRef = this.dialog.open(DetalleUsuarioComponent, {
        maxWidth:  '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        autoFocus: false,
        panelClass: "modals-admin"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openVehicleInsuranceModal() {
    let dialogRef = this.dialog.open(InsurancePolicyComponent, {
        maxWidth:  '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        autoFocus: false,
        panelClass: "semi-transparent-modal"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openVehicleDescriptionModal() {
    let dialogRef = this.dialog.open(VehicleDescriptionComponent, {
        maxWidth:  '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        autoFocus: false,
        panelClass: "semi-transparent-modal"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openResearchFolderModal() {
    let dialogRef = this.dialog.open(ResearchFolderComponent, {
        maxWidth:  '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        autoFocus: false,
        panelClass: "semi-transparent-modal"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openReportedVehicleModal() {
    let dialogRef = this.dialog.open(ReportedComponent, {
        maxWidth:  '100vw',
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

  openFoundVehicleModal() {
    let dialogRef = this.dialog.open(FoundComponent, {
        maxWidth:  '100vw',
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



}


