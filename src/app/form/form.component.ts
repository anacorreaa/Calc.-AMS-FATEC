import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  //somar
  onClickSum(){
    this.result = this.num1 + this.num2;
  }
  onClickSub(){
    this.result = this.num1 - this.num2;
  }
  onClickDiv(){
    this.result = this.num1 / this.num2;
  }
  onClickMult(){
    this.result = this.num1 * this.num2;
  }
  onClickPot(){
    this.result = Math.pow(this.num1, this.num2);
  }
  onClickMed(){
    this.result = (this.num1 + this.num2) / 2;
  }

}
