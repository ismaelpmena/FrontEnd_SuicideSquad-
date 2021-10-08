import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuariosservices.service';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { Usuarios } from '../../interfaces/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  siteKey:string;
  LoginForm!: FormGroup;

  constructor(public us:UsuariosService, private formBuilder: FormBuilder, private router: Router){
    this.createUserForm();
    this.siteKey="6Lc6MrMcAAAAAOMYRNKQJTZ5KGNLP6DPtsu3T-Nq";
  }

  createUserForm(){
    this.LoginForm = this.formBuilder.group({
      email: [''],
      contrasena: [''],
    });
  }

  ingresar()
  {
    let usuario: Usuarios = {
      rut: "",
      nombre: "",
      apellido: "",
      email: this.LoginForm.value.email,
      contrasena: this.LoginForm.value.contrasena
    }
      if (this.us.verificar(usuario)=="Ok") {
        this.router.navigate(['/General']);
      }
  }

}
