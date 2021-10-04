import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { LoginComponent } from './paginas/login/login.component';
import { GeneralusuariosComponent } from './paginas/generalusuarios/generalusuarios.component';
import { GeneralcursosComponent } from './paginas/generalcursos/generalcursos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GeneralusuariosComponent,
    GeneralcursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
