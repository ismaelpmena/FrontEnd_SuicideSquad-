import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuariosservices.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(public us:UsuariosService) { }

  ngOnInit(): void {
  }

}
