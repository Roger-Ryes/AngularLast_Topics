import { Component, OnInit, ViewChild  } from '@angular/core';
import { GraphicsService } from '../../services/graphics.service';
// import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  // Pie
  // public pieChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: 'top',
  //     },
  //     datalabels: {
  //       formatter: (value, ctx) => {
  //         if (ctx.chart.data.labels) {
  //           return ctx.chart.data.labels[ctx.dataIndex];
  //         }
  //       },
  //     },
  //   }
  // };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  // public pieChartPlugins = [ DatalabelsPlugin ];

}
