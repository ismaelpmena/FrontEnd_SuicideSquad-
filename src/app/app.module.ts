import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidaModule } from './compartida/compartida.module';
import { PaginasModule } from './paginas/paginas.module';


@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CompartidaModule,
    PaginasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
