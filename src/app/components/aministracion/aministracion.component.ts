import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aministracion',
  templateUrl: './aministracion.component.html',
  styleUrls: ['./aministracion.component.scss']
})
export class AministracionComponent implements OnInit {
  favoriteSeason !: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  searchFormGroup !: FormGroup ;
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.searchFormGroup = this._formBuilder.group({
      username: ['', Validators.required]
    });

  }
}
