import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GraficoComponent } from './grafico/grafico.component';
import { ConstruccionComponent } from './construccion/construccion.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    GraficoComponent,
    ConstruccionComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    GraficoComponent,
    ConstruccionComponent
  ],
  imports: [
    CommonModule,
    //grafico
  ]
})
export class CompartidaModule { }
