import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  constructor(public serviceU:UsuariosService, private router:Router) { 
    
    this.serviceU.getUsuarios().subscribe(data=>{
    this.usuarios = data;
    })
  }

  ngOnInit(): void {
  }

  editar(id:number):void
  {
    localStorage.setItem("UsuarioId",id.toString());
    this.router.navigate(["editar"]);
  }

  eliminar(id:number){
    this.serviceU.eliminar(id).subscribe(()=>{
      this.serviceU.getUsuarios().subscribe(data=>{
        this.usuarios = data;
      })

    });

  }

}
