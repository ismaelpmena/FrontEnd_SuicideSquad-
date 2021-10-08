import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';
import {UsuariosService}  from 'src/app/services/usuariosservices.service';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario!:Usuarios;
  usuarioForm!: FormGroup;
  constructor(public us:UsuariosService, private formBuilder: FormBuilder) {
    this.createUserForm();
  }

  ngOnInit(): void {
  }

  createUserForm(){
    this.usuarioForm = this.formBuilder.group({
      id: [''],
      nombre: [''],  
      email: [''],
      apellido: [''],
      rut: [''],
      contrasena: ['']
    });
  }

  actualizar(){
    let usuario: Usuarios = {
      id: this.usuarioForm.value.id,
      rut: this.usuarioForm.value.rut,
      nombre: this.usuarioForm.value.nombre,
      apellido: this.usuarioForm.value.apellido,
      email: this.usuarioForm.value.email,
      contrasena: this.usuarioForm.value.contrasena
    }
    this.us.updateUsuario(usuario);
  }

  // Actualizar(usuarios:Usuarios){
  //   this.service.updateUsuarios(usuarios).subscribe(data=>{
  //     this.usuario=data;
  //     console.log("se actualizo la vola");
  //   })
  // }
}
