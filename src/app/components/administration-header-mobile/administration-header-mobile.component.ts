import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-administration-header-mobile',
  templateUrl: './administration-header-mobile.component.html',
  styleUrls: ['./administration-header-mobile.component.scss'],
})
export class AdministrationHeaderMobileComponent implements OnInit {
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
