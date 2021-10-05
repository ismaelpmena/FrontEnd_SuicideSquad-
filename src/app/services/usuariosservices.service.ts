import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosservicesService {

  usuarios: Usuarios[] = [];
    // carrito:string[] = [];
    constructor(private http: HttpClient) {
        this.obtenerUsuarios();
    }

    private obtenerUsuarios() {
        this.http.get('../assets/data/productoHombre.json').subscribe((resp: any) => {
            this.usuarios = resp.usuarios;
            
            
            
        });
    }


}
