import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  imports: [FormsModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  mySelectedFruit:string=''
  onClick(){
    alert("Button Clicked")
  }

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

   onkeyDown(){
    alert('You have pressed a key inside text input!')
  }
  
  onchangeFruits(){
    console.log(this.mySelectedFruit);
    
  }
}
