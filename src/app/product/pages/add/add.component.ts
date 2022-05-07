import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  msg: string = "Este campo es requerido";

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  haveError(field: string): boolean {
    return this.myForm.get(field)?.invalid && this.myForm.get('name')?.touched || false;
  }

  changeName(){
    // console.log(this.myForm.get("name")?.value);
    this.msg = this.myForm.get("name")?.value;
  }
}
