import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

import {UsuariosService}  from 'src/app/services/usuariosservices.service';
import {Usuarios}  from 'src/app/interfaces/usuarios';


@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  usuarios:Usuarios[]=[];

  @Output() propagar = new EventEmitter<Usuarios>();

  constructor(public serviceU:UsuariosService, private router:Router) { 
    this.serviceU.getUsuarios().subscribe(data=>{
      this.usuarios = data;
      })
  }

  ngOnInit(): void {
  }

  editar(usuario:Usuarios):void
  {
    this.verEditar()
    console.log(usuario);
    this.serviceU.usuarioEdit = usuario;
  }

  eliminar(id:number|undefined){
    this.serviceU.eliminar(Number(id)).subscribe(()=>{
      this.serviceU.getUsuarios().subscribe(data=>{
        this.usuarios = data;
      })
    });
  }

  public verEditar(): void{
    if (this.serviceU.editusers==true){
      this.serviceU.editusers=false;
    }
    else{
      this.serviceU.editusers=true;
    }
  }

}
