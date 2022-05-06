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

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  @Input() typeGraphic!: String;

  public barChartOptions: ChartConfiguration['options'] = { responsive: true, };

  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<any>|undefined = {
    labels: [],
    datasets: []
  };


  ngOnInit(): void {
    if(this.typeGraphic=="line"){
      this.barChartType = 'line';
    }else if(this.typeGraphic=="bar"){
      // this.barChartType = 'bar';      
    }
  }


}
