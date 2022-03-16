import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputsComponent } from './components/inputs/inputs.component';
import { TableComponent } from './components/table/table.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RadioComponent } from './components/radio/radio.component';
import { ListComponent } from './components/list/list.component';
import { SlideComponent } from './components/slide/slide.component';
import { ChipsComponent } from './components/chips/chips.component';
import { BadgesComponent } from './components/badges/badges.component';
import { TypografyComponent } from './components/typografy/typografy.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { SearchComponent } from './components/search/search.component';
import { GestorComponent } from './components/gestor/gestor.component';
import { AministracionComponent } from './components/aministracion/aministracion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TemplateComponent } from './components/shared/template/template.component';
const routes: Routes = [
  {  path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path:'inputs-text', component:InputsComponent},
  {path:'select', component:SelectComponent},
  {path:'buttons', component:ButtonsComponent},
  {path:'radio', component:RadioComponent},
  {path:'slide', component:SlideComponent},
  {path:'chips', component:ChipsComponent},
  {path:'list', component:ListComponent},
  {path:'badges', component:BadgesComponent},
  {path:'autocomplete', component:AutocompleteComponent},
  {path:'search', component:SearchComponent},
  {path:'gestor', component:GestorComponent},
  {path:'administracion', component:AministracionComponent},
  {path:'inicio', component:InicioComponent},
  {path:'**', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
