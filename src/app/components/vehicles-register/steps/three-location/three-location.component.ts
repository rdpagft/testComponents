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
  zoom = 12
  center !: google.maps.LatLngLiteral
  options: google.maps.MapOptions

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
    this.options = {
      mapTypeId: 'hybrid',
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 8,
    }


   }

   ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }


}

