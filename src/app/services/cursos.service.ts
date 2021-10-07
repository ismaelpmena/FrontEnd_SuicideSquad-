import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cursos } from '../interfaces/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  listcursos:boolean=false;
  addcursos:boolean=false;
  cursos: Cursos[] = [];

  
    constructor(private http: HttpClient) {
        //this.obtenerCursos();
    }

    url = 'http://localhost:8080/api/cursos/listar';
    url2= 'http://localhost:8080/api/cursos/eliminar';

    getCursos(){
      return this.http.get<Cursos[]>(this.url);
    }

    eliminar(cursos:Cursos){
    return this.http.delete<Cursos>(this.url2+"/"+cursos.id);
    }
/*     private obtenerCursos() {
        this.http.get('http://localhost:8080/api/cursos/listar').subscribe((resp: any) => {
            this.cursos = resp.cursos;
            
        });
    } */
}
