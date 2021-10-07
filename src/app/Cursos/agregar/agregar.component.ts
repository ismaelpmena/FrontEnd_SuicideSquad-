import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-agregarcursos',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(public cursos:CursosService) { }

  ngOnInit(): void {
  }

}
