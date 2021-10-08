import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import {LoginComponent } from './login/login.component';
import { GeneralComponent } from './general/general.component';
import { UsuariosModule } from '../Usuarios/Usuarios.module';
import { HttpClientModule } from '@angular/common/http';
import { CursosModule } from '../Cursos/cursos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    GeneralComponent,
    
  ],
  exports: [
    RegistroComponent,
    LoginComponent,
    GeneralComponent,
    
  ],
  imports: [
    CommonModule, 
    UsuariosModule, 
    CursosModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

    
  ]
})
export class PaginasModule { }
