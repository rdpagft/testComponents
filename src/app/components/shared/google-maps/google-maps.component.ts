import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  @Input() options !: google.maps.MapOptions 
  @Input() center !: google.maps.LatLngLiteral
  @Input() zoom:number =0


  constructor() { }


  ngOnInit(): void {
    // console.log("options", this.options);
    // console.log("center", this.center);
    // console.log("zoom", this.zoom);

  }

}
