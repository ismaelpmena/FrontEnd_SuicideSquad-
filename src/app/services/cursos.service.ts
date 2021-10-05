import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cursos } from '../interfaces/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Cursos[] = [];
    // carrito:string[] = [];
    constructor(private http: HttpClient) {
        this.obtenerCursos();
    }

    private obtenerCursos() {
        this.http.get('../assets/data/productoHombre.json').subscribe((resp: any) => {
            this.cursos = resp.cursos;
            
            
            
        });
    }
}
