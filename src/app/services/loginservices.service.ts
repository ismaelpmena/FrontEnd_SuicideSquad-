import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {

  login: Login[] = [];
  // carrito:string[] = [];
  constructor(private http: HttpClient) {
      this.obtenerCuentasUsuarios();
  }

  private obtenerCuentasUsuarios() {
      this.http.get('../assets/data/productoHombre.json').subscribe((resp: any) => {
          this.login = resp.login;
          
          
          
      });
  }
}
