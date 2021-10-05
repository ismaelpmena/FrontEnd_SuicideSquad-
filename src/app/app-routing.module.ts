import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralcursosComponent } from './paginas/generalcursos/generalcursos.component';
import { LoginComponent } from './paginas/login/login.component';
import { GeneralusuariosComponent } from './paginas/generalusuarios/generalusuarios.component';

const routes: Routes = [

  //{ path:'', component: ProductoComponent },
  { path:'', component: LoginComponent },
  { path:'Generalusuarios', component: GeneralusuariosComponent },
  { path:'Generalcursos', component: GeneralcursosComponent },
  { path:'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
