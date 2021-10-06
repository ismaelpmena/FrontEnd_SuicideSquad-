import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsuariosService}  from 'src/app/services/usuariosservices.service';
import {Usuarios}  from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-listar',
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

}
