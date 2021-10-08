import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  //single=[];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  single = [
    {
      "name": "calculo 1",
      "value": 8940000
    },
    {
      "name": "calculo 2",
      "value": 5000000
    },
    {
      "name": "algebra",
      "value": 7200000
    },
      {
      "name": "java",
      "value": 6200000
    }
  ];


  constructor() {
    //Object.assign(this, { single });
  }

  onSelect(data : any ): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data : any ): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data : any ): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
