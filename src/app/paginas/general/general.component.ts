import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuariosservices.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private usuariosservice:UsuariosService, 
    private cursosservice:CursosService) {

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
public verlistacursos():void{
  if(this.cursosservice.listcursos==true){
    this.cursosservice.listcursos=false;
    console.log("funciona volver a apretar el apretar el boton");
  }
  else{
    this.cursosservice.listcursos=true;
    console.log("funciona el apretar el boton");
  }
}
  public verAgregar(): void{
    if (this.usuariosservice.addusers==true){
      this.usuariosservice.addusers=false;
      console.log("ta funcionando el boton");
    }
    else{
      this.usuariosservice.addusers=true;
      console.log("estaaaaaaaaa funcionando el boton");
    }
  }
  public verAgregarcursos(): void{
    if (this.cursosservice.addcursos==true){
      this.cursosservice.addcursos=false;
      console.log("ta funcionando el boton");
    }
    else{
      this.cursosservice.addcursos=true;
      console.log("estaaaaaaaaa funcionando el boton");
    }
  }

}
