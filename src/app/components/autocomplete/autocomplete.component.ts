import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map, debounceTime} from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})


export class AutocompleteComponent implements OnInit {
  stateCtrl = new FormControl();
  stateCtrlDisabled = new FormControl()
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];
  ngOnInit(): void {
    this.stateCtrlDisabled.disable()
  }

  constructor(){
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      debounceTime(1000), //delay
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  clear(ctrl:FormControl){
    ctrl.setValue(null);
  }
}
