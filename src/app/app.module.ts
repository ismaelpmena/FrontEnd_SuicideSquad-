import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidaModule } from './compartida/compartida.module';
import { PaginasModule } from './paginas/paginas.module';
import { CursosModule } from './Cursos/cursos.module';
import { UsuariosModule } from './Usuarios/Usuarios.module';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  exports:[
    //NgxCaptchaModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CompartidaModule,
    PaginasModule,
    CursosModule,
    UsuariosModule,
    NgxCaptchaModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
