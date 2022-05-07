import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMgDirective } from './directives/error-mg.directive';



@NgModule({
  declarations: [
    ErrorMgDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorMgDirective
  ]
})
export class SharedModule { }
