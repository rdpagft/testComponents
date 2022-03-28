import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-one-data',
  templateUrl: './one-data.component.html',
  styleUrls: ['./one-data.component.scss']
})
export class OneDataComponent implements OnInit {
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

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      username: ['', [Validators.required]]
    });
    this.infoFormGroup = this._formBuilder.group({
      model: [''],
      type: [''],
      brand: [''],
      subbrand: [''],
      motor: [''],
      color: [''],
      origin: [''],
      plate: [''],
      status_plate: [''],
    });
    this.isEmpty = true
    this.showFound = false

 
   }

  ngOnInit(): void {
    this.firstFormGroup.controls['username'].valueChanges.subscribe(value => {      
      this.isEmpty = value == '' ? true : false
    });
  }

  serieValidation(event: any){
    console.log(event);
  }

}
