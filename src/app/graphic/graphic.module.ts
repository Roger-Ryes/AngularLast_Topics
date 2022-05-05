import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraphicRoutingModule } from './graphic-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoubleComponent } from './pages/barras-double/barras-double.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { GraphicBarraComponent } from './components/graphic-barra/graphic-barra.component';



@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoubleComponent,
    DonutComponent,
    DonutHttpComponent,
    GraphicBarraComponent
  ],
  imports: [
    CommonModule,
    GraphicRoutingModule,
    NgChartsModule
  ]
})
export class GraphicModule { }
