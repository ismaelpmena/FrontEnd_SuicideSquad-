import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  listusers:boolean=false;
  addusers:boolean=false;
  editusers:boolean=false;
  usuarios: Usuarios[] = [];
  usuarioEdit!:Usuarios;
  // carrito:string[] = [];

    constructor(private http: HttpClient) {
    }
    url = 'http://localhost:8080/api/usuarios/listar';
    url2= 'http://localhost:8080/api/usuarios/eliminar';
    url3 = 'http://localhost:8080/api/usuarios/guardar';

    getUsuarios(){
        return this.http.get<Usuarios[]>(this.url);
    }

    eliminar(id:number){
      return this.http.delete(`${this.url2}/${id}`);
    }

    getUsuario(id:number){
      return this.http.get<Usuarios>(this.url+"/"+id);
    }

    updateUsuario(usuario:Usuarios)
    { 
      let usuarioId;
      console.log(usuario);
      console.log(this.http.put<Usuarios>('http://localhost:8080/api/usuarios/modificar',usuario).subscribe(data => usuarioId = data.id));
      console.log("El usuario se guardo con ID",usuarioId);
    }

    verificar(usuario:Usuarios)
    { 
      return this.http.post<Usuarios>('http://localhost:8080/api/usuarios/verificar',usuario).subscribe();
    }

    saveUsuario(usuario:Usuarios)
    { 
      return new Promise(resolve => {
        setTimeout(() => {
          let usuarioId;
          console.log(usuario);
          console.log(this.http.put<Usuarios>('http://localhost:8080/api/usuarios/guardar',usuario).subscribe(data => usuarioId = data.id));
          console.log("El usuario se guardo con ID",usuarioId);
        }, 2000);
      });
    }
}
