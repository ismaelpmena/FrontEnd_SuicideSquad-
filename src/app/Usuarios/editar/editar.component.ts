import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';
import {UsuariosService}  from 'src/app/services/usuariosservices.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario!:Usuarios;
  constructor(private service:UsuariosService) {
    this.Editar();
  }

  ngOnInit(): void {
  }

  Editar(){
    let id = localStorage.getItem("UsuarioId");
    this.service.getUsuario(Number(id)).subscribe(data=>{
      console.log(data);
    });
  }

  Actualizar(usuarios:Usuarios){
    this.service.updateUsuarios(usuarios).subscribe(data=>{
      this.usuario=data;
      console.log("se actualizo la vola");
    })
  }
}
