import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMgDirective implements OnInit, OnChanges{

  public htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = "red";
  @Input() message: string = "Mensage de error";

  constructor( private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
    console.log(el)
  }
  ngOnChanges(changes: SimpleChanges): void {
    const msg = changes['message'].currentValue; 
    this.htmlElement.nativeElement.innerText = msg;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  setColor(): void{
    this.htmlElement.nativeElement.classList.add("form-text");
    this.htmlElement.nativeElement.style.color = this.color;
  }
  setMessage(): void{
    this.htmlElement.nativeElement.innerText = this.message;
  }
}
