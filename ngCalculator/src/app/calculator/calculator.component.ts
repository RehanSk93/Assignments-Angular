import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  longBtn: string[] = ['AC', 'CE'];
  shortBtn: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];

  result: string = '';

  private preValue: string = '';
  private curValue: string = '';


  addExpression(value: string){

    if(this.result != ''){
      this.preValue = this.curValue;
      this.curValue = value;
    }

    if(value == 'AC'){
      this.result = '';
    }else if(value == 'CE'){
      this.result = this.preValue != '=' ? this.result.slice(0, -1) : this.result;
    }else if(value == '='){
      this.result = eval(this.result);
    }else{
      this.result += value;
    }
    
  }

  constructor() { }

  ngOnInit() {
  }


}
