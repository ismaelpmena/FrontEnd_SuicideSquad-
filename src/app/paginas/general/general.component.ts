import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuariosservices.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private usuariosservice:UsuariosService) {

  //  this.usuariosservice.obtenerUsuarios();
  //  console.log(" ta funcionando : "+ this.usuariosservice.obtenerUsuarios());
   }

  ngOnInit(): void {
  }

public verlista(): void{
  if (this.usuariosservice.listusers==true){
    this.usuariosservice.listusers=false;
    console.log("ta funcionando el boton");
  }
  else{
    this.usuariosservice.listusers=true;
    console.log("estaaaaaaaaa funcionando el boton");


  }
}

}
