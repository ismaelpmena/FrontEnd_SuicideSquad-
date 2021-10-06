import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import {LoginComponent } from './login/login.component';
import { GeneralComponent } from './general/general.component';
import { UsuariosModule } from '../Usuarios/Usuarios.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { AgregarComponent } from '../Usuarios/agregar/agregar.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    GeneralComponent,
    //AgregarComponent

  ],
  exports: [
    RegistroComponent,
    LoginComponent,
    GeneralComponent,
  ],
  imports: [
    CommonModule, 
    UsuariosModule, 
    HttpClientModule
  ]
})
export class PaginasModule { }
