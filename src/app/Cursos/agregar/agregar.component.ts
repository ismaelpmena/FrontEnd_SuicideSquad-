import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
import { Cursos } from '../../interfaces/cursos';

@Component({
  selector: 'app-agregarcursos',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  cursoForm!: FormGroup;
  constructor(public cursoService:CursosService, public formBuilder: FormBuilder,public route:Router) {
    this.createCursosForm();
  }

  createCursosForm(){
    this.cursoForm = this.formBuilder.group({
      nombre: ['', Validators.required,
        Validators.minLength(10)],  
      cantidadAlumnos: ['']
    });
  }
  
  insertarcurso():void{let curso: Cursos = {
    
      nombre: this.cursoForm.value.nombre,
      cantidadAlumnos: this.cursoForm.value.cantidadAlumnos,
    }

    this.cursoService.saveCursos(curso);
    this.route.navigate(['General']).then(() => {
      this.cursoService.getCursos().subscribe(
        
      )
    });
  }
}
