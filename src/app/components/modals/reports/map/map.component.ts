import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  searchFormGroup!: FormGroup
  zoom = 12
  center !: google.maps.LatLngLiteral
  options: google.maps.MapOptions
  
  constructor(private _formBuilder: FormBuilder) {
    this.searchFormGroup = this._formBuilder.group({
      username: [''],
    });
    this.options = {
      mapTypeId: 'hybrid',
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 8,
    }

   }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

}
