import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';




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
    

  ]
})
export class UsuariosModule { }
