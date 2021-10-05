import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { GeneralusuariosComponent } from './generalusuarios/generalusuarios.component';
import { GeneralcursosComponent } from './generalcursos/generalcursos.component';
import {LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    GeneralusuariosComponent,
    GeneralcursosComponent
  ],
  exports: [
    RegistroComponent,
    GeneralusuariosComponent,
    GeneralcursosComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
