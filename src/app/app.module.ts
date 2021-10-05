import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './paginas/login/login.component';
import { GeneralusuariosComponent } from './paginas/generalusuarios/generalusuarios.component';
import { GeneralcursosComponent } from './paginas/generalcursos/generalcursos.component';
import { CompartidaModule } from './compartida/compartida.module';
// import { RegistroComponent } from './login/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeneralusuariosComponent,
    GeneralcursosComponent,
    // RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CompartidaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
