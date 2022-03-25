import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-two-event',
  templateUrl: './two-event.component.html',
  styleUrls: ['./two-event.component.scss']
})
export class TwoEventComponent implements OnInit {

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
    this.infoFormGroup = this._formBuilder.group({
      claim_number: [''],
      company_date: [''],
      event_date: [''],
      event_hour: [''],
      type_register: [''],
      event_type: [''],
      involved_number: [''],
      research_folder: [''],
      research_folderRepoted: [''],
      status_plate: [''],
    });
    this.isEmpty = true
    this.showFound = true

 
   }

  ngOnInit(): void {
    this.infoFormGroup.controls['research_folder'].valueChanges.subscribe(value => {      
      console.log(value);
    });
  }

  serieValidation(event: any){
    console.log(event);
  }

}
