import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './components/select/select.component';
import { ChipsComponent } from './components/chips/chips.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AministracionComponent } from './components/administration/aministracion/aministracion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DataVehicleComponent } from './components/vehicles-register/data-vehicle/data-vehicle.component';
import { LocationDetailComponent } from './components/vehicles-register/location-detail/location-detail.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';

//hType: '0'// header with options
///hType:'1' // header without options
//hType: '' //not apply (modals)

const routes: Routes = [
  {  path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path:'select', component:SelectComponent, data:{ title:"Consultas", hType:'0' }},
  {path:'autocomplete', component:AutocompleteComponent, data:{ title:"Lotes", hType:'0' } },
  {path:'chips', component:ChipsComponent, data:{ title:"Reportes", hType:'0' }},
  {path:'administracion', component:AministracionComponent, data:{ title:"Administración", hType:'0' }},
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent, data:{title:"Editar Usuario", hType: "1"} },
  {path:'inicio', component:InicioComponent, data:{ title:"Inicio", hType:'0' }},
  {path:'reported', component:DataVehicleComponent, data:{title: 'Alta de Robo o Abuso de Confianza', hType: '1'}} ,
  { path: 'location-detail', component: LocationDetailComponent,  data:{ title:"Detalle de Localización", hType: '' } },
  {path:'**', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
