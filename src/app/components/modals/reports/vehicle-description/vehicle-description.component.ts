import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vehicle-description',
  templateUrl: './vehicle-description.component.html',
  styleUrls: ['./vehicle-description.component.scss']
})
export class VehicleDescriptionComponent implements OnInit {

  constructor(private dialog: MatDialogRef<VehicleDescriptionComponent>) { }

  ngOnInit(): void {
  }
  
  close(){
    this.dialog.close()
  }

}
