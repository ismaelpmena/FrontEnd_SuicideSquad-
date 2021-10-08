import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuariosservices.service';
import { Usuarios } from '../../interfaces/usuarios';
import { FormGroup, FormBuilder } from  '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregarusuarios',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  usuarioForm!: FormGroup;
  
  constructor(public us:UsuariosService, private formBuilder: FormBuilder, private router:Router){
    this.createUserForm();
  }

  createUserForm(){
    this.usuarioForm = this.formBuilder.group({
      nombre: [''],  
      email: [''],
      apellido: [''],
      rut: [''],
      contrasena: [''],
      contrasena2: ['']
    });
  }

  async insertar(){
    let usuario: Usuarios = {
      rut: this.usuarioForm.value.rut,
      nombre: this.usuarioForm.value.nombre,
      apellido: this.usuarioForm.value.apellido,
      email: this.usuarioForm.value.email,
      contrasena: this.usuarioForm.value.contrasena
    }
    if(this.usuarioForm.value.contrasena == this.usuarioForm.value.contrasena2)
    {
      await this.us.saveUsuario(usuario);
    }  
  }
}
