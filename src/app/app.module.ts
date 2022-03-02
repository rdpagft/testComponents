import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatRadioModule } from '@angular/material/radio';
import { StepperComponent } from './components/stepper/stepper.component'
import { MatStepperIntl, MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InputsComponent } from './components/inputs/inputs.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import {MatSelectModule} from '@angular/material/select';
import { SelectComponent } from './components/select/select.component';
import  {  NgxMatExtSelectModule  }  from  '@fgrid-ngx/mat-ext-select';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RadioComponent } from './components/radio/radio.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    StepperComponent,
    InputsComponent,
    CheckboxesComponent,
    SelectComponent,
    ButtonsComponent,
    RadioComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatSelectModule,
    NgxMatExtSelectModule
  ],
  providers: [
      // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
