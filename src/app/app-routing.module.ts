import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputsComponent } from './components/inputs/inputs.component';
import { TableComponent } from './components/table/table.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RadioComponent } from './components/radio/radio.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path:'', component:TableComponent},
  {path:'inputs-text', component:InputsComponent},
  {path:'ckeckbox', component:CheckboxesComponent},
  {path:'select', component:SelectComponent},
  {path:'buttons', component:ButtonsComponent},
  {path:'radio', component:RadioComponent},
  {path:'list', component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
