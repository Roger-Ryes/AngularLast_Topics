import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "graficos",
    loadChildren: () => import('./graphic/graphic.module').then(m => m.GraphicModule)
  },
  {
    path: "**",
    redirectTo: "graficos"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
