import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-header',
  templateUrl: './administration-header.component.html',
  styleUrls: ['./administration-header.component.scss'],
})
export class AdministrationHeaderComponent implements OnInit {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  status: string[];

  searchFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) {
    this.status = ['Activo', 'Inactivo'];
  }

  ngOnInit(): void {
    this.searchFormGroup = this._formBuilder.group({
      username: [''],
    });
  }
  newUser() {
    this.router.navigate(['nuevo-usuario']);
  }
}
