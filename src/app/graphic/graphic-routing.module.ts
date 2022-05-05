import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDoubleComponent } from './pages/barras-double/barras-double.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';

const routes: Routes = [
  {path: "barras", component: BarrasComponent},
  {path: "barras-dobles", component: BarrasDoubleComponent},
  {path: "dona", component: DonutComponent},
  {path: "dona-http", component: DonutHttpComponent},
  {path: "**", redirectTo: "barras"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicRoutingModule { }
