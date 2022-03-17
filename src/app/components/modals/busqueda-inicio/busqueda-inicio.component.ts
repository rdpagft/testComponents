import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-busqueda-inicio',
  templateUrl: './busqueda-inicio.component.html',
  styleUrls: ['./busqueda-inicio.component.scss']
})
export class BusquedaInicioComponent implements OnInit {

  searchFormGroup!: FormGroup
  constructor(private _formBuilder: FormBuilder) {
    this.searchFormGroup = this._formBuilder.group({
      username: [''],
    });
   }

  ngOnInit(): void {
  }

}
