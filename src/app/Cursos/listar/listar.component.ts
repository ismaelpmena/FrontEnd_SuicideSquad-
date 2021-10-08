import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CursosService} from 'src/app/services/cursos.service';
import {Cursos}  from 'src/app/interfaces/cursos';


@Component({
  selector: 'app-listarcursos',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  cursos:Cursos[]=[];

  constructor(public serviceCursos:CursosService, private router:Router, private http:HttpClient) { 
    this.serviceCursos.getCursos().subscribe(data=>{
    this.cursos = data;
    });
  }

  ngOnInit(): void {

  }


  eliminar(id:number|undefined){
    this.serviceCursos.eliminar(Number(id)).subscribe(()=>{
      this.serviceCursos.getCursos().subscribe(data=>{
        this.cursos = data;
      })
    });
  }


}

