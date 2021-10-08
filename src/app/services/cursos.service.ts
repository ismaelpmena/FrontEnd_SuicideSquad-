import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cursos } from '../interfaces/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  listcursos:boolean=false;
  addcursos:boolean=false;
  //editcursos:boolean=false;

  cursos: Cursos[] = [];
  
    constructor(private http: HttpClient) {
        //this.obtenerCursos();
    }

    url = 'http://localhost:8080/api/cursos/listar';
    url2= 'http://localhost:8080/api/cursos/eliminar';
    ulrModificar='http://localhost:8080/api/cursos/modificar'

/*     private obtenerCursos() {
        this.http.get('http://localhost:8080/api/cursos/listar').subscribe((resp: any) => {
            this.cursos = resp.cursos;
            
        });
    } */

    getCursos(){
      return this.http.get<Cursos[]>(this.url);
  }

  eliminar(id:number){
    return this.http.delete(`${this.url2}/${id}`);
  }

  getCurso(id:number){
    return this.http.get<Cursos>(this.url+"/"+id);

  }
  // updateUsuarios(usuarios:Cursos){
  //   return this.http.put<Cursos>(this.url3,usuarios);
  // }

  saveCursos(cursos:Cursos)
  { 
    this.http.put<Cursos>(this.ulrModificar,cursos).subscribe();
  }
}
