import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMgDirective implements OnInit, OnChanges {

  private _msg = "Error message";
  private _color = "red";
  public htmlElement: ElementRef<HTMLElement>;
  // Setter, creo una funcion
  @Input() set color(value: string) {
    this.htmlElement.nativeElement.style.color = value;
    this._color = value;
  };
  @Input() set message(value: string) {
    this.htmlElement.nativeElement.innerText = (value) ? value : this._msg;
    this._msg = value;
  };

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Metodo 1
    // if(changes['message']){
    //   const msg = changes['message'].currentValue; 
    //   this.htmlElement.nativeElement.innerText = msg;
    // }
    // if(changes['color']){
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }

  ngOnInit(): void {
    // this.setColor();
    this.setMessage();
    this.setStyle();
  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add("form-text");
  }
  // setColor(): void {
  //   this.htmlElement.nativeElement.style.color = this._color;
  // }
  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._msg;
  }
}
