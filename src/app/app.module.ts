import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatStepperIntl, MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputsComponent } from './components/inputs/inputs.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponent } from './components/select/select.component';
import { NgxMatExtSelectModule } from '@fgrid-ngx/mat-ext-select';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RadioComponent } from './components/radio/radio.component';
import { ListComponent } from './components/list/list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SlideComponent } from './components/slide/slide.component';
import { ChipsComponent } from './components/chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { BadgesComponent } from './components/badges/badges.component';
import { MatBadgeModule } from '@angular/material/badge';
import { TypografyComponent } from './components/typografy/typografy.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchComponent } from './components/search/search.component';
import { GestorComponent } from './components/gestor/gestor.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { AministracionComponent } from './components/aministracion/aministracion.component';
import { MatDividerModule } from '@angular/material/divider';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TemplateComponent } from './components/shared/template/template.component';
import { MatCardModule } from '@angular/material/card';
import { AdministrationHeaderComponent } from './components/administration-header/administration-header.component';
import { AdministrationHeaderMobileComponent } from './components/administration-header-mobile/administration-header-mobile.component';
import { TablaUsuariosMobileComponent } from './components/tabla-usuarios-mobile/tabla-usuarios-mobile.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterMobileComponent } from './components/filter-mobile/filter-mobile.component';
import { BusquedaInicioComponent } from './components/modals/busqueda-inicio/busqueda-inicio.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmacionEdicionUsuarioComponent } from './components/modals/administracion/confirmacion-edicion-usuario/confirmacion-edicion-usuario.component';
import { ConfirmacionInactivarUsuarioComponent } from './components/modals/administracion/confirmacion-inactivar-usuario/confirmacion-inactivar-usuario.component';

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
    SlideComponent,
    ChipsComponent,
    BadgesComponent,
    TypografyComponent,
    AutocompleteComponent,
    SearchComponent,
    GestorComponent,
    AministracionComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    TemplateComponent,
    TablaUsuariosComponent,
    AdministrationHeaderComponent,
    AdministrationHeaderMobileComponent,
    TablaUsuariosMobileComponent,
    FilterComponent,
    FilterMobileComponent,
    BusquedaInicioComponent,
    ConfirmacionEdicionUsuarioComponent,
    ConfirmacionInactivarUsuarioComponent,
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
    NgxMatExtSelectModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
    // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
