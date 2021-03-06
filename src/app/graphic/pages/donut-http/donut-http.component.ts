import { AfterContentInit, Component, OnInit } from '@angular/core';
import { GraphicsService } from '../../services/graphics.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements AfterContentInit {

  donutData:any;
  dataLabels: string[]=[];
  dataSets: number[]=[];

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.dataLabels,
    datasets: [ {
      data: this.dataSets
    } ]
  };
  public pieChartType: ChartType = 'pie';
  
  constructor(private graphicsService:GraphicsService) { }

  ngAfterContentInit(): void {
    // this.donutData = this.graphicsService.getUserSocialNetwork().subscribe(resp=>{
    //   const ketData = Object.keys(resp);
    //   const data = Object.values(resp);
    //   ketData.forEach(e=>{this.dataLabels.push(e)});
    //   data.forEach(e=>{this.dataSets.push(e)});
    //   // console.log("la: "+this.dataLabels)
    //   // console.log("Se: "+this.dataSets)
    // })
    this.donutData = this.graphicsService.getUserSocialNetworkDonutData().subscribe(({label, dataset})=>{
      label.forEach(e=>{ this.dataLabels.push(e) });
      dataset.forEach(e=>{ this.dataSets.push(e) });
    });
  }

}
