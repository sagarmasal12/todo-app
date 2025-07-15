import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-compont',
  imports: [FormsModule],
  templateUrl: './todo-compont.component.html',
  styleUrl: './todo-compont.component.css'
})
export class TodoCompontComponent {


  task="";
  
  taskList:{id:number,task:string}[]=[]

  addTask(){
    this.taskList.push({id:this.taskList.length+1, task:this.task});
    this.task="";
  }


  ondelete(id:number){
    this.taskList = this.taskList.filter(item => item.id !== id)
    
  }

}
