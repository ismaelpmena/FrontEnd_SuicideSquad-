import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  listusers:boolean=false;
  addusers:boolean=false;
  usuarios: Usuarios[] = [];
  // carrito:string[] = [];

    constructor(private http: HttpClient) {
        
    }
    url = 'http://localhost:8080/api/usuarios/listar';
    url2= 'http://localhost:8080/api/usuarios/eliminar';
    url3 = 'http://localhost:8080/api/usuarios/modificar';

    getUsuarios(){
        return this.http.get<Usuarios[]>(this.url);
    }

    eliminar(id:number){
      return this.http.delete(`${this.url2}/${id}`);
    }

    getUsuario(id:number){
      return this.http.get<Usuarios>(this.url3+"/"+id);

    }
    updateUsuarios(usuarios:Usuarios){
      return this.http.put<Usuarios>(this.url3,usuarios);
    }

    saveUsuario(usuario:Usuarios){
      return this.http.put<Usuarios>(this.url3,usuario);
    }
}
