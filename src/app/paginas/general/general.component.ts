import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuariosservices.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private usuariosservice:UsuariosService) {

    this.usuariosservice.obtenerUsuarios();
    console.log(" ta funcionando : "+ this.usuariosservice.obtenerUsuarios());
   }

  ngOnInit(): void {
  }



}
