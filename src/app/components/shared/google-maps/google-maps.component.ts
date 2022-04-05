import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit, AfterViewInit{

  @ViewChild(GoogleMap) map !: GoogleMap
  @ViewChild('mapSearchField') mapSearchField !: ElementRef
  @ViewChild('container__map') container__map !: ElementRef

  @Input() options !: google.maps.MapOptions 
  @Input() center !: google.maps.LatLngLiteral
  @Input() zoom:number =0


  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.container__map);
    console.log(this.mapSearchField);
    const searchBox = new google.maps.places.SearchBox(this.mapSearchField.nativeElement)
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    this.mapSearchField.nativeElement
    )
    searchBox.addListener('places_changed', ()=>{
      const places =searchBox.getPlaces()
      if(places?.length === 0) return
      const bounds  = new google.maps.LatLngBounds()
      places?.forEach(place => {
        if(!place.geometry || !place.geometry.location) return
        place.geometry.viewport ? bounds.union(place.geometry.viewport) : bounds.extend(place.geometry.location)
      })
      this.map.fitBounds(bounds)
    })
  }


  ngOnInit(): void {
  }

  
}
