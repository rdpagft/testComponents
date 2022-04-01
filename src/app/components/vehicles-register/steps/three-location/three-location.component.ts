import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-three-location',
  templateUrl: './three-location.component.html',
  styleUrls: ['./three-location.component.scss']
})
export class ThreeLocationComponent implements OnInit {


  firstFormGroup !: FormGroup ;
  infoFormGroup !: FormGroup ;
  isEmpty: boolean; 
  showFound: boolean;
  animals: any[] = [
    {id:1,name: 'Dog', sound: 'Woof!'},
    {id:2,name: 'Cat', sound: 'Meow!'},
    {id:3,name: 'Cow', sound: 'Moo!'},
    {id:4,name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  zoom: number
  lat: number 
  lng: number 

  constructor(private _formBuilder: FormBuilder) {
    this.infoFormGroup = this._formBuilder.group({
      postal_code: [''],
      country: [''],
      state: [''],
      town: [''],
      suburb: [''],
      street: [''],
      number: [''],
    });
    this.isEmpty = true
    this.showFound = true

    this.lat = 19.290950;
    this.lng = -99.653015;
    this.zoom = 9;
 
   }


  ngOnInit(): void {
    
  }
}

