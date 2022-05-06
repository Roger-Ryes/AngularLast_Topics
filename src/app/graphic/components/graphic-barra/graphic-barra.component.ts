import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-barra',
  templateUrl: './graphic-barra.component.html',
  styles: [
  ]
})
export class GraphicBarraComponent implements OnInit {

  @Input() typeGraphic!: String;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  ngOnInit(): void {
    console.log("value: "+this.typeGraphic);
  }

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: "#0BD4A6", hoverBackgroundColor: "green"  },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C', hoverBackgroundColor: "blue" },
      { data: [18, 88, 9, 12, 75, 12, 82], label: 'Series B', backgroundColor: "#F50105" }
    ]
  };

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets.forEach(e=>{
      e.data=[
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
      this.chart?.update();

    })
  }

}
