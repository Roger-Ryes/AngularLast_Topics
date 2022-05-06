import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-barras-double',
  templateUrl: './barras-double.component.html',
  styles: [
  ]
})
export class BarrasDoubleComponent {

  typeGraphic1: string = "bar";

  proveedoresData: ChartData<'bar'> = {
    labels: ["", "", "", "", ""],
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
      { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
    ]
  };


  typeGraphic2: string = "circle";

  productoData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [200, 300, 400, 300, 100], label: 'Carros', backgroundColor: 'blue' },
    ]
  }

}
