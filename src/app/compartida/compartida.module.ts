import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GraficoComponent } from './grafico/grafico.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    GraficoComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    GraficoComponent,
  ],
  imports: [
    CommonModule,
    //grafico
  ]
})
export class CompartidaModule { }
