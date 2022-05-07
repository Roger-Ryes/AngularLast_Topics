import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMgDirective implements OnInit{

  constructor() { 
    console.log("constructor directive")
  }
  ngOnInit(): void {
    console.log("onnit directive");
  }

}
