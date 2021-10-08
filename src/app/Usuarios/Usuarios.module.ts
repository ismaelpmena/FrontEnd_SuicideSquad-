import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListarComponent
  ],
  exports: [
    AgregarComponent,
    EditarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ]
})
export class UsuariosModule { }
