import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
listusers:boolean=false;
  usuarios: Usuarios[] = [];
  // carrito:string[] = [];
    constructor(private http: HttpClient) {
        
    }

    url = 'http://localhost:8080/api/usuarios/listar';

    getUsuarios(){
        return this.http.get<Usuarios[]>(this.url);
    }

  


}
