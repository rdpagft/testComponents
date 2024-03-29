import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BuscarUsuarioComponent } from '../../modals/administracion/buscar-usuario/buscar-usuario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-header-mobile',
  templateUrl: './administration-header-mobile.component.html',
  styleUrls: ['./administration-header-mobile.component.scss'],
})
export class AdministrationHeaderMobileComponent implements OnInit {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  searchFormGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchFormGroup = this._formBuilder.group({
      username: [''],
    });
  }

  searchUser() {
    this.dialog.open(BuscarUsuarioComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      autoFocus: false,
      panelClass: 'users-admin',
    });
  }

  newUser() {
    this.router.navigate(['nuevo-usuario']);
  }
}
