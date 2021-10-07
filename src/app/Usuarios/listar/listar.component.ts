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
  constructor(public serviceU:UsuariosService, private router:Router, private http:HttpClient) { 
    this.serviceU.getUsuarios().subscribe(data=>{
    this.usuarios = data;
    }) 
  }

  ngOnInit(): void {
  }

  eliminar(usuarios:Usuarios){
    this.serviceU.eliminar(usuarios).subscribe(data=>{
    this.usuarios = this.usuarios.filter(u=>u!==usuarios);
    alert("usuario eliminado..")
    })
  }

}
