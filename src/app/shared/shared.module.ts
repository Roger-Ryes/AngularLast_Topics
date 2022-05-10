import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMgDirective } from './directives/error-mg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMgDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorMgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
