import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuarios[] = [];
    // carrito:string[] = [];
    constructor(private http: HttpClient) {
        this.obtenerUsuarios();
    }

    public obtenerUsuarios() {
        this.http.get('http://localhost:8080/api/usuarios/listar').subscribe((resp: any) => {
            this.usuarios = resp.usuarios;
            
            
            
        });
    }


}
