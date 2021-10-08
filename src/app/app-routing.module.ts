import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './paginas/general/general.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import {EditarComponent} from './Usuarios/editar/editar.component';

const routes: Routes = [

  //{ path:'', component: ProductoComponent },
  { path:'', component: LoginComponent },
  { path:'General', component: GeneralComponent },
  { path:'login', component: LoginComponent },
  { path:'registro', component: RegistroComponent },
  { path:'editar', component: EditarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
