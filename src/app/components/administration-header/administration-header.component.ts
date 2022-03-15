import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-administration-header',
  templateUrl: './administration-header.component.html',
  styleUrls: ['./administration-header.component.scss'],
})
export class AdministrationHeaderComponent implements OnInit {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  searchFormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.searchFormGroup = this._formBuilder.group({
      username: [''],
    });
  }
}
