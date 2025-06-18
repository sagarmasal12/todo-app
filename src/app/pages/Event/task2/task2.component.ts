import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  imports: [],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css'
})
export class Task2Component {

  result:number = 0;

  multiplyValues(num1:string,num2:string){

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if(!isNaN(n1) && !isNaN(n2)){
      this.result= n1*n2
    }else{
      this.result= 0;
    }
  }
}
