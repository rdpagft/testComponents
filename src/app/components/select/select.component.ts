import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  animalControl = new FormControl('', [Validators.required]);
  animals: any[] = [
    {id:1,name: 'Dog', sound: 'Woof!'},
    {id:2,name: 'Cat', sound: 'Meow!'},
    {id:3,name: 'Cow', sound: 'Moo!'},
    {id:4,name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  public filteredList1 = this.animals.slice();
  constructor() { }

  ngOnInit(): void {
  }

  itemSelected(event: any){
    console.log(event);
  }

}
