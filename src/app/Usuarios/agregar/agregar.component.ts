import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuariosservices.service';
import { Usuarios } from '../../interfaces/usuarios';

@Component({
  selector: 'app-agregarusuarios',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  usuario!:Usuarios;
  password2:string = "";
  constructor(public us:UsuariosService) { }

  ngOnInit(): void {
  }

  insertar():void
  {
    if(this.usuario.password == this.password2)
    {
      this.us.saveUsuario(this.usuario);
    }
  }

}
